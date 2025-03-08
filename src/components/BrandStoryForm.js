// Brand Story Generator Form Component
class BrandStoryForm {
    constructor(container) {
        this.container = container;
        this.render();
        this.attachEventListeners();
    }
    
    render() {
        this.container.innerHTML = `
            <div class="brand-story-form p-4">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h3>Brand Story Generator</h3>
                    <button id="backToDashboard" class="btn btn-outline-dark btn-sm">Back to Dashboard</button>
                </div>
                <form id="brandStoryForm">
                    <div class="mb-3">
                        <label for="brandName" class="form-label">Brand/Hotel Name</label>
                        <input type="text" class="form-control" id="brandName" required>
                    </div>
                    <div class="mb-3">
                        <label for="brandDescription" class="form-label">Brand Description</label>
                        <textarea class="form-control" id="brandDescription" rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="targetAudience" class="form-label">Target Audience</label>
                        <input type="text" class="form-control" id="targetAudience" required>
                    </div>
                    <div class="mb-3">
                        <label for="brandValues" class="form-label">Brand Values (comma separated)</label>
                        <input type="text" class="form-control" id="brandValues" required>
                    </div>
                    <div class="mb-3">
                        <label for="uniqueSellingPoints" class="form-label">Unique Selling Points</label>
                        <textarea class="form-control" id="uniqueSellingPoints" rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="toneOfVoice" class="form-label">Tone of Voice</label>
                        <select class="form-control" id="toneOfVoice" required>
                            <option value="elegant">Elegant & Refined</option>
                            <option value="exclusive">Exclusive & Prestigious</option>
                            <option value="warm">Warm & Inviting</option>
                            <option value="adventurous">Adventurous & Bold</option>
                            <option value="sustainable">Sustainable & Conscious</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-dark">Generate Brand Story</button>
                </form>
                <div id="result" class="mt-4"></div>
            </div>
        `;
    }
    
    attachEventListeners() {
        // Form submission handler
        const form = this.container.querySelector('#brandStoryForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.generateBrandStory();
        });
        
        // Back button handler
        const backButton = this.container.querySelector('#backToDashboard');
        backButton.addEventListener('click', () => {
            const dashboard = document.querySelector('#dashboard');
            if (dashboard) {
                dashboard.style.display = 'block';
                this.container.style.display = 'none';
            }
        });
    }
    
    generateBrandStory() {
        const brandName = document.getElementById('brandName').value;
        const brandDescription = document.getElementById('brandDescription').value;
        const targetAudience = document.getElementById('targetAudience').value;
        const brandValues = document.getElementById('brandValues').value;
        const uniqueSellingPoints = document.getElementById('uniqueSellingPoints').value;
        const toneOfVoice = document.getElementById('toneOfVoice').value;
        
        // In a real implementation, we would call an AI API here
        // For now, we'll simulate a response with a timeout
        const resultContainer = this.container.querySelector('#result');
        resultContainer.innerHTML = '<div class="alert alert-info">Generating your luxury brand story...</div>';
        
        setTimeout(() => {
            // Simulate AI response
            const mockStory = this.getMockBrandStory(brandName, brandDescription, toneOfVoice, targetAudience, brandValues, uniqueSellingPoints);
            resultContainer.innerHTML = `
                <div class="card mt-4">
                    <div class="card-header">Generated Brand Story</div>
                    <div class="card-body">
                        <h5 class="card-title">The ${brandName} Experience</h5>
                        <p class="card-text">${mockStory}</p>
                        <div class="d-flex mt-3">
                            <button class="btn btn-sm btn-outline-dark save-story">Save Story</button>
                            <button class="btn btn-sm btn-outline-dark ms-2 regenerate-story">Regenerate</button>
                            <button class="btn btn-sm btn-outline-dark ms-2 export-story">Export to PDF</button>
                        </div>
                    </div>
                </div>
            `;
            
            // Add event listeners to new buttons
            const saveBtn = resultContainer.querySelector('.save-story');
            const regenerateBtn = resultContainer.querySelector('.regenerate-story');
            const exportBtn = resultContainer.querySelector('.export-story');
            
            saveBtn.addEventListener('click', () => {
                alert('Story saved successfully!');
            });
            
            regenerateBtn.addEventListener('click', () => {
                this.generateBrandStory();
            });
            
            exportBtn.addEventListener('click', () => {
                alert('Export to PDF feature will be implemented soon!');
            });
        }, 2000);
    }
    
    getMockBrandStory(brandName, description, tone, audience, values, sellingPoints) {
        const toneMap = {
            elegant: "with timeless elegance and sophistication",
            exclusive: "offering an exclusive sanctuary for the discerning few",
            warm: "creating a warm embrace of hospitality and comfort",
            adventurous: "inspiring bold journeys and unforgettable experiences",
            sustainable: "harmonizing luxury with environmental consciousness"
        };
        
        const valuesArray = values.split(',').map(v => v.trim());
        const valuesText = valuesArray.length > 1 
            ? `${valuesArray.slice(0, -1).join(', ')} and ${valuesArray.slice(-1)}` 
            : values;
        
        return `${brandName} stands as a beacon of luxury hospitality ${toneMap[tone]}. 
                Drawing inspiration from ${description}, we create moments that transcend 
                ordinary travel experiences for ${audience}.
                
                Rooted in our core values of ${valuesText}, each interaction, each detail, 
                each space has been meticulously crafted to elevate the art of hospitality 
                to unprecedented heights.
                
                ${sellingPoints.split('\n').map(point => `• ${point}`).join('\n')}
                
                At ${brandName}, we don't just accommodate guests; we curate journeys that resonate 
                with their deepest aspirations, creating memories that linger long after departure.
                This is not merely luxury; this is a living legacy of exceptional experiences.`;
    }
}