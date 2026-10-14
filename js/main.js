const app = {
            navigate: function(route) {
                // Mobile menu close
                document.getElementById('nav-links').classList.remove('mobile-active');
                
                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-links a[data-route="${route}"]`);
                if(activeLink) activeLink.classList.add('active');

                // Switch Views
                document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
                const targetView = document.getElementById(`view-${route}`);
                if(targetView) {
                    targetView.classList.add('active');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }

                // Reset wizard if navigating to it fresh
                if(route === 'start-project' && wizard.currentStep === 7) {
                    wizard.goTo(1);
                }
            },

            showToast: function(message, type = 'success') {
                const container = document.getElementById('toast-container');
                const toast = document.createElement('div');
                toast.className = `toast`;
                if(type === 'success') toast.style.borderLeft = '3px solid var(--syntax-green)';
                if(type === 'error') toast.style.borderLeft = '3px solid var(--syntax-red)';
                
                toast.innerHTML = `<span class="font-code">[SYS_${type === 'success' ? 'OK' : 'ERR'}]</span> ${message}`;
                container.appendChild(toast);
                
                setTimeout(() => {
                    toast.style.animation = 'slideOut 300ms forwards';
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            },

            submitContact: function(e) {
                e.preventDefault();
                const btn = e.target.querySelector('button');
                btn.innerText = "Executing..."; btn.disabled = true;
                setTimeout(() => {
                    app.showToast('POST Request Successful. Inquiry logged.');
                    btn.innerText = "Execute POST Request"; btn.disabled = false;
                    e.target.reset();
                }, 1000);
            },

            copyBrief: function() {
                const text = document.getElementById('brief-output').innerText;
                navigator.clipboard.writeText(text).then(() => app.showToast('Brief copied to clipboard.'))
                .catch(() => {
                    const ta = document.createElement("textarea"); ta.value = text;
                    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
                    app.showToast('Brief copied (Fallback).');
                });
            },

            submitInquiry: function() {
                const btn = document.getElementById('btn-deploy');
                btn.innerText = "Deploying..."; btn.disabled = true;
                setTimeout(() => {
                    btn.innerText = "Deployed Successfully";
                    btn.className = "btn btn-ghost text-green";
                    app.showToast('Payload delivered to Dewata Labs secure server.');
                }, 1500);
            }
        };

        /* js/project-wizard.js - Interactive Form Logic */

const wizard = {
            currentStep: 1, totalSteps: 7, data: {},

            init: function() {
                this.updateUI();
                document.querySelectorAll('#wizard-form input, select, textarea').forEach(el => {
                    el.addEventListener('input', () => el.classList.remove('error'));
                });
            },

            validateStep: function() {
                const stepEl = document.querySelector(`.wizard-step[data-step="${this.currentStep}"]`);
                const inputs = stepEl.querySelectorAll('input[required], select[required], textarea[required]');
                let valid = true;
                inputs.forEach(input => {
                    if (!input.value.trim()) { valid = false; input.classList.add('error'); }
                });
                if(!valid) app.showToast('Missing required environment variables.', 'error');
                return valid;
            },

            next: function() {
                if (!this.validateStep()) return;
                if (this.currentStep === 5) this.compileData();
                if (this.currentStep === 6) this.generateBrief();
                if (this.currentStep < this.totalSteps) {
                    this.currentStep++;
                    this.updateUI();
                }
            },

            prev: function() {
                if (this.currentStep > 1) { this.currentStep--; this.updateUI(); }
            },

            goTo: function(step) { this.currentStep = step; this.updateUI(); },

            updateUI: function() {
                document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
                document.querySelector(`.wizard-step[data-step="${this.currentStep}"]`).classList.add('active');

                const progressContainer = document.getElementById('progress-container');
                if(this.currentStep === 7) { progressContainer.style.display = 'none'; } 
                else {
                    progressContainer.style.display = 'flex';
                    document.querySelectorAll('.progress-bar').forEach((bar, idx) => {
                        bar.classList.toggle('active', idx < this.currentStep);
                    });
                }

                const controls = document.getElementById('wizard-controls');
                const btnPrev = document.getElementById('btn-prev');
                const btnNext = document.getElementById('btn-next');

                if (this.currentStep === 1) { btnPrev.style.display = 'none'; btnNext.innerText = 'Next >'; }
                else if (this.currentStep === 6) { btnPrev.style.display = 'block'; btnNext.innerText = 'Generate Brief'; }
                else if (this.currentStep === 7) { controls.style.display = 'none'; }
                else { btnPrev.style.display = 'block'; btnNext.innerText = 'Next >'; controls.style.display = 'flex'; }
            },

            compileData: function() {
                const solutions = Array.from(document.querySelectorAll('input[name="solution"]:checked')).map(cb => cb.value);
                this.data = {
                    client_entity: {
                        name: document.getElementById('w-name').value,
                        sector: document.getElementById('w-industry').value
                    },
                    diagnostics: { problem_statement: document.getElementById('w-problem').value },
                    architecture: { modules: solutions.length ? solutions : ['Pending Architecture Review'] },
                    dependencies: { features: document.getElementById('w-features').value || 'None specified' },
                    parameters: { budget: document.getElementById('w-budget').value, contact: document.getElementById('w-email').value }
                };
                document.getElementById('review-content').innerText = JSON.stringify(this.data, null, 2);
            },

            generateBrief: function() {
                const d = this.data;
                const brief = `
# SYSTEM ARCHITECTURE BRIEF
Generated: ${new Date().toISOString()}

## 1. CONTEXT
Client Entity: ${d.client_entity.name}
Sector: ${d.client_entity.sector}
Contact: ${d.parameters.contact}

## 2. PROBLEM STATEMENT
${d.diagnostics.problem_statement}

## 3. TARGET ARCHITECTURE
${d.architecture.modules.map(m => `- ${m}`).join('\n')}

## 4. CONSTRAINTS & FEATURES
${d.dependencies.features}

---
[SYS_NOTE] Parameters confirmed. Ready for API submission.`;
                document.getElementById('brief-output').innerText = brief.trim();
            }
        };

// Initialize
        window.addEventListener('DOMContentLoaded', () => { wizard.init(); });
