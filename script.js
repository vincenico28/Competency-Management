// Sample Data Storage
let employees = [
    {
        id: 'EMP001',
        name: 'Dr. Sarah Johnson',
        department: 'Emergency',
        role: 'Emergency Physician',
        email: 'sarah.johnson@hospital.com',
        competencyScore: 92,
        lastTraining: '2024-06-15',
        status: 'active'
    },
    {
        id: 'EMP002',
        name: 'Nurse Maria Garcia',
        department: 'ICU',
        role: 'ICU Nurse',
        email: 'maria.garcia@hospital.com',
        competencyScore: 88,
        lastTraining: '2024-06-20',
        status: 'active'
    },
    {
        id: 'EMP003',
        name: 'Dr. Michael Chen',
        department: 'Surgery',
        role: 'Cardiac Surgeon',
        email: 'michael.chen@hospital.com',
        competencyScore: 95,
        lastTraining: '2024-06-10',
        status: 'active'
    },
    {
        id: 'EMP004',
        name: 'Lisa Thompson',
        department: 'Nursing',
        role: 'Charge Nurse',
        email: 'lisa.thompson@hospital.com',
        competencyScore: 85,
        lastTraining: '2024-06-25',
        status: 'active'
    },
    {
        id: 'EMP005',
        name: 'Dr. Robert Kim',
        department: 'Cardiology',
        role: 'Cardiologist',
        email: 'robert.kim@hospital.com',
        competencyScore: 90,
        lastTraining: '2024-06-12',
        status: 'active'
    }
];

let competencies = [
    {
        id: 'COMP001',
        name: 'Basic Life Support (BLS)',
        category: 'Clinical',
        description: 'Essential life-saving techniques for cardiac emergencies',
        validityPeriod: 24,
        status: 'active'
    },
    {
        id: 'COMP002',
        name: 'Advanced Cardiac Life Support (ACLS)',
        category: 'Clinical',
        description: 'Advanced interventions for cardiac arrest and other emergencies',
        validityPeriod: 24,
        status: 'active'
    },
    {
        id: 'COMP003',
        name: 'Infection Control',
        category: 'Safety',
        description: 'Protocols for preventing healthcare-associated infections',
        validityPeriod: 12,
        status: 'active'
    },
    {
        id: 'COMP004',
        name: 'Patient Communication',
        category: 'Communication',
        description: 'Effective communication strategies with patients and families',
        validityPeriod: 36,
        status: 'active'
    },
    {
        id: 'COMP005',
        name: 'Medical Device Operation',
        category: 'Technical',
        description: 'Proper use and maintenance of medical equipment',
        validityPeriod: 12,
        status: 'active'
    }
];

let trainingSessions = [
    {
        id: 'TRN001',
        title: 'BLS Certification Renewal',
        competency: 'Basic Life Support (BLS)',
        instructor: 'Dr. Emily Wilson',
        date: '2024-07-15',
        duration: '4 hours',
        status: 'Scheduled',
        participants: 15
    },
    {
        id: 'TRN002',
        title: 'Infection Control Update',
        competency: 'Infection Control',
        instructor: 'Sarah Mitchell, RN',
        date: '2024-07-20',
        duration: '2 hours',
        status: 'Scheduled',
        participants: 25
    },
    {
        id: 'TRN003',
        title: 'New Equipment Training',
        competency: 'Medical Device Operation',
        instructor: 'Tech Team',
        date: '2024-07-12',
        duration: '3 hours',
        status: 'Completed',
        participants: 20
    }
];

let complianceData = [
    {
        employeeId: 'EMP001',
        employeeName: 'Dr. Sarah Johnson',
        competency: 'Basic Life Support (BLS)',
        status: 'Current',
        dueDate: '2024-08-15',
        completedDate: '2024-06-15'
    },
    {
        employeeId: 'EMP002',
        employeeName: 'Nurse Maria Garcia',
        competency: 'Infection Control',
        status: 'Expiring Soon',
        dueDate: '2024-07-20',
        completedDate: '2024-06-20'
    },
    {
        employeeId: 'EMP003',
        employeeName: 'Dr. Michael Chen',
        competency: 'ACLS',
        status: 'Overdue',
        dueDate: '2024-07-01',
        completedDate: '2024-05-01'
    }
];

let learningPaths = [
    {
        id: 'LP001',
        title: 'Clinical Excellence Path',
        category: 'Clinical',
        description: 'Comprehensive training for clinical staff',
        duration: '6 months',
        status: 'Active',
        assignedEmployees: 10
    },
    {
        id: 'LP002',
        title: 'Safety Compliance Path',
        category: 'Safety',
        description: 'Mandatory safety training program',
        duration: '3 months',
        status: 'Active',
        assignedEmployees: 15
    }
];

let successionPlans = [
    {
        id: 'SP001',
        role: 'Emergency Physician',
        candidate: 'Dr. Sarah Johnson',
        readiness: 'High',
        developmentPlan: 'Leadership training, advanced certifications',
        targetDate: '2025-06-01'
    },
    {
        id: 'SP002',
        role: 'Charge Nurse',
        candidate: 'Lisa Thompson',
        readiness: 'Medium',
        developmentPlan: 'Management skills course',
        targetDate: '2025-09-01'
    }
];

let essItems = [
    {
        id: 'ESS001',
        type: 'Training',
        title: 'BLS Certification Renewal',
        status: 'Enrolled',
        dueDate: '2024-07-15',
        employeeId: 'EMP001'
    },
    {
        id: 'ESS002',
        type: 'Competency',
        title: 'Infection Control',
        status: 'Pending',
        dueDate: '2024-07-20',
        employeeId: 'EMP002'
    }
];

// Navigation Functions
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    // Load section-specific data
    switch(sectionId) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'learning':
            loadLearningPaths();
            break;
        case 'succession':
            loadSuccessionPlans();
            break;
        case 'ess':
            loadESS();
            break;
        case 'competencies':
            loadCompetencies();
            break;
        case 'training':
            loadTraining();
            break;
        case 'compliance':
            loadCompliance();
            break;
        case 'reports':
            loadReports();
            break;
    }
}

// Dashboard Functions
function loadDashboard() {
    updateDashboardStats();
    // In a real application, you would load charts here
    // For now, we'll just show placeholder text
}

function updateDashboardStats() {
    document.getElementById('totalEmployees').textContent = employees.length;
    document.getElementById('activeCompetencies').textContent = competencies.length;
    document.getElementById('trainingSessions').textContent = trainingSessions.length;
    
    // Calculate compliance rate
    const totalRequired = employees.length * competencies.length;
    const compliant = complianceData.filter(item => item.status === 'Current').length;
    const complianceRate = Math.round((compliant / totalRequired) * 100);
    document.getElementById('complianceRate').textContent = complianceRate + '%';
}

// Learning Management Functions
function loadLearningPaths() {
    const list = document.getElementById('learningPathList');
    list.innerHTML = '';
    
    learningPaths.forEach(path => {
        const item = document.createElement('div');
        item.className = 'training-item';
        item.innerHTML = `
            <div class="training-header">
                <h3 class="training-title">${path.title}</h3>
                <span class="status-badge ${getStatusClass(path.status)}">${path.status}</span>
            </div>
            <div class="training-details">
                <p><strong>Category:</strong> ${path.category}</p>
                <p><strong>Description:</strong> ${path.description}</p>
                <p><strong>Duration:</strong> ${path.duration}</p>
                <p><strong>Assigned Employees:</strong> ${path.assignedEmployees}</p>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="editLearningPath('${path.id}')">Edit</button>
                <button class="btn-secondary" onclick="viewLearningPathDetails('${path.id}')">View Details</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function filterLearningPaths() {
    const category = document.getElementById('learningCategory').value;
    const filteredPaths = category ? 
        learningPaths.filter(path => path.category === category) : 
        learningPaths;
    
    displayFilteredLearningPaths(filteredPaths);
}

function displayFilteredLearningPaths(pathList) {
    const list = document.getElementById('learningPathList');
    list.innerHTML = '';
    
    pathList.forEach(path => {
        const item = document.createElement('div');
        item.className = 'training-item';
        item.innerHTML = `
            <div class="training-header">
                <h3 class="training-title">${path.title}</h3>
                <span class="status-badge ${getStatusClass(path.status)}">${path.status}</span>
            </div>
            <div class="training-details">
                <p><strong>Category:</strong> ${path.category}</p>
                <p><strong>Description:</strong> ${path.description}</p>
                <p><strong>Duration:</strong> ${path.duration}</p>
                <p><strong>Assigned Employees:</strong> ${path.assignedEmployees}</p>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="editLearningPath('${path.id}')">Edit</button>
                <button class="btn-secondary" onclick="viewLearningPathDetails('${path.id}')">View Details</button>
            </div>
        `;
        list.appendChild(item);
    });
}

// Succession Planning Functions
function loadSuccessionPlans() {
    const list = document.getElementById('successionPlanList');
    list.innerHTML = '';
    
    successionPlans.forEach(plan => {
        const item = document.createElement('div');
        item.className = 'training-item';
        item.innerHTML = `
            <div class="training-header">
                <h3 class="training-title">${plan.role}</h3>
                <span class="status-badge ${getStatusClass(plan.readiness)}">${plan.readiness}</span>
            </div>
            <div class="training-details">
                <p><strong>Candidate:</strong> ${plan.candidate}</p>
                <p><strong>Development Plan:</strong> ${plan.developmentPlan}</p>
                <p><strong>Target Date:</strong> ${formatDate(plan.targetDate)}</p>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="editSuccessionPlan('${plan.id}')">Edit</button>
                <button class="btn-secondary" onclick="viewSuccessionPlanDetails('${plan.id}')">View Details</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function filterSuccessionPlans() {
    const role = document.getElementById('successionRole').value;
    const filteredPlans = role ? 
        successionPlans.filter(plan => plan.role === role) : 
        successionPlans;
    
    displayFilteredSuccessionPlans(filteredPlans);
}

function displayFilteredSuccessionPlans(planList) {
    const list = document.getElementById('successionPlanList');
    list.innerHTML = '';
    
    planList.forEach(plan => {
        const item = document.createElement('div');
        item.className = 'training-item';
        item.innerHTML = `
            <div class="training-header">
                <h3 class="training-title">${plan.role}</h3>
                <span class="status-badge ${getStatusClass(plan.readiness)}">${plan.readiness}</span>
            </div>
            <div class="training-details">
                <p><strong>Candidate:</strong> ${plan.candidate}</p>
                <p><strong>Development Plan:</strong> ${plan.developmentPlan}</p>
                <p><strong>Target Date:</strong> ${formatDate(plan.targetDate)}</p>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="editSuccessionPlan('${plan.id}')">Edit</button>
                <button class="btn-secondary" onclick="viewSuccessionPlanDetails('${plan.id}')">View Details</button>
            </div>
        `;
        list.appendChild(item);
    });
}

// Employee Self-Service Functions
function loadESS() {
    const list = document.getElementById('essList');
    list.innerHTML = '';
    
    essItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'training-item';
        itemElement.innerHTML = `
            <div class="training-header">
                <h3 class="training-title">${item.title}</h3>
                <span class="status-badge ${getStatusClass(item.status)}">${item.status}</span>
            </div>
            <div class="training-details">
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Due Date:</strong> ${formatDate(item.dueDate)}</p>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="viewESSDetails('${item.id}')">View Details</button>
                <button class="btn-secondary" onclick="enrollESS('${item.id}')">Enroll/Update</button>
            </div>
        `;
        list.appendChild(itemElement);
    });
}

function searchESS() {
    const searchTerm = document.getElementById('essSearch').value.toLowerCase();
    const filteredItems = essItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.type.toLowerCase().includes(searchTerm)
    );
    
    displayFilteredESS(filteredItems);
}

function filterESS() {
    const type = document.getElementById('essFilter').value;
    const filteredItems = type ? 
        essItems.filter(item => item.type === type) : 
        essItems;
    
    displayFilteredESS(filteredItems);
}

function displayFilteredESS(itemList) {
    const list = document.getElementById('essList');
    list.innerHTML = '';
    
    itemList.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'training-item';
        itemElement.innerHTML = `
            <div class="training-header">
                <h3 class="training-title">${item.title}</h3>
                <span class="status-badge ${getStatusClass(item.status)}">${item.status}</span>
            </div>
            <div class="training-details">
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Due Date:</strong> ${formatDate(item.dueDate)}</p>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="viewESSDetails('${item.id}')">View Details</button>
                <button class="btn-secondary" onclick="enrollESS('${item.id}')">Enroll/Update</button>
            </div>
        `;
        list.appendChild(itemElement);
    });
}

// Competency Functions
function loadCompetencies() {
    const grid = document.getElementById('competencyGrid');
    grid.innerHTML = '';
    
    competencies.forEach(competency => {
        const card = document.createElement('div');
        card.className = 'competency-card';
        card.innerHTML = `
            <h3>${competency.name}</h3>
            <span class="competency-category">${competency.category}</span>
            <p class="mb-10">${competency.description}</p>
            <div class="text-center">
                <small>Validity: ${competency.validityPeriod} months</small>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="editCompetency('${competency.id}')">Edit</button>
                <button class="btn-secondary" onclick="assignCompetency('${competency.id}')">Assign</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCompetencies() {
    const category = document.getElementById('competencyCategory').value;
    const filteredCompetencies = category ? 
        competencies.filter(comp => comp.category === category) : 
        competencies;
    
    displayFilteredCompetencies(filteredCompetencies);
}

function displayFilteredCompetencies(competencyList) {
    const grid = document.getElementById('competencyGrid');
    grid.innerHTML = '';
    
    competencyList.forEach(competency => {
        const card = document.createElement('div');
        card.className = 'competency-card';
        card.innerHTML = `
            <h3>${competency.name}</h3>
            <span class="competency-category">${competency.category}</span>
            <p class="mb-10">${competency.description}</p>
            <div class="text-center">
                <small>Validity: ${competency.validityPeriod} months</small>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="editCompetency('${competency.id}')">Edit</button>
                <button class="btn-secondary" onclick="assignCompetency('${competency.id}')">Assign</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Training Functions
function loadTraining() {
    const list = document.getElementById('trainingList');
    list.innerHTML = '';
    
    trainingSessions.forEach(session => {
        const item = document.createElement('div');
        item.className = 'training-item';
        item.innerHTML = `
            <div class="training-header">
                <h3 class="training-title">${session.title}</h3>
                <span class="status-badge ${getStatusClass(session.status)}">${session.status}</span>
            </div>
            <div class="training-details">
                <p><strong>Competency:</strong> ${session.competency}</p>
                <p><strong>Instructor:</strong> ${session.instructor}</p>
                <p><strong>Date:</strong> ${formatDate(session.date)}</p>
                <p><strong>Duration:</strong> ${session.duration}</p>
                <p><strong>Participants:</strong> ${session.participants}</p>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="editTraining('${session.id}')">Edit</button>
                <button class="btn-secondary" onclick="viewParticipants('${session.id}')">View Participants</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function filterTraining() {
    const status = document.getElementById('trainingStatus').value;
    const filteredSessions = status ? 
        trainingSessions.filter(session => session.status === status) : 
        trainingSessions;
    
    displayFilteredTraining(filteredSessions);
}

function displayFilteredTraining(sessionList) {
    const list = document.getElementById('trainingList');
    list.innerHTML = '';
    
    sessionList.forEach(session => {
        const item = document.createElement('div');
        item.className = 'training-item';
        item.innerHTML = `
            <div class="training-header">
                <h3 class="training-title">${session.title}</h3>
                <span class="status-badge ${getStatusClass(session.status)}">${session.status}</span>
            </div>
            <div class="training-details">
                <p><strong>Competency:</strong> ${session.competency}</p>
                <p><strong>Instructor:</strong> ${session.instructor}</p>
                <p><strong>Date:</strong> ${formatDate(session.date)}</p>
                <p><strong>Duration:</strong> ${session.duration}</p>
                <p><strong>Participants:</strong> ${session.participants}</p>
            </div>
            <div class="mt-10">
                <button class="btn-secondary" onclick="editTraining('${session.id}')">Edit</button>
                <button class="btn-secondary" onclick="viewParticipants('${session.id}')">View Participants</button>
            </div>
        `;
        list.appendChild(item);
    });
}

// Compliance Functions
function loadCompliance() {
    const tbody = document.getElementById('complianceTableBody');
    tbody.innerHTML = '';
    
    complianceData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.employeeName}</td>
            <td>${item.competency}</td>
            <td><span class="status-badge ${getStatusClass(item.status)}">${item.status}</span></td>
            <td>${formatDate(item.dueDate)}</td>
            <td>
                <button class="btn-secondary" onclick="updateCompliance('${item.employeeId}', '${item.competency}')">Update</button>
                <button class="btn-secondary" onclick="sendReminder('${item.employeeId}')">Remind</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Reports Functions
function loadReports() {
    // Set default date range
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth() - 3, 1);
    
    document.getElementById('reportStartDate').value = startDate.toISOString().split('T')[0];
    document.getElementById('reportEndDate').value = today.toISOString().split('T')[0];
}

function generateReport() {
    const reportType = document.getElementById('reportType').value;
    const startDate = document.getElementById('reportStartDate').value;
    const endDate = document.getElementById('reportEndDate').value;
    const reportContent = document.getElementById ('reportContent');
    // Simulate report generation
    reportContent.innerHTML = `
        <h3>${getReportTitle(reportType)}</h3>
        <p><strong>Report Period:</strong> ${formatDate(startDate)} to ${formatDate(endDate)}</p>
        <div class="mt-20">
            <h4>Summary</h4>
            <p>This is a sample report showing ${reportType} data for the selected period.</p>
            <div class="mt-20">
                <h4>Key Metrics</h4>
                <ul>
                    <li>Total Records: ${Math.floor(Math.random() * 100) + 50}</li>
                    <li>Completion Rate: ${Math.floor(Math.random() * 30) + 70}%</li>
                    <li>Average Score: ${Math.floor(Math.random() * 20) + 80}%</li>
                </ul>
            </div>
        </div>
    `;
}

function exportReport() {
    alert('Report export functionality would be implemented here. This would generate a PDF report.');
}

// Modal Functions
function showAddCompetencyModal() {
    document.getElementById('addCompetencyModal').style.display = 'block';
}

function showScheduleTrainingModal() {
    alert('Schedule Training modal would be implemented here.');
}

function showScheduleLearningPathModal() {
    alert('Schedule Learning Path modal would be implemented here.');
}

function showAddSuccessionPlanModal() {
    alert('Add Succession Plan modal would be implemented here.');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Form Handlers
document.getElementById('addCompetencyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newCompetency = {
        id: 'COMP' + String(competencies.length + 1).padStart(3, '0'),
        name: document.getElementById('competencyName').value,
        category: document.getElementById('competencyCategory').value,
        description: document.getElementById('competencyDescription').value,
        validityPeriod: parseInt(document.getElementById('competencyValidityPeriod').value),
        status: 'active'
    };
    
    competencies.push(newCompetency);
    loadCompetencies();
    closeModal('addCompetencyModal');
    this.reset();
    
    alert('Competency added successfully!');
});

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getStatusClass(status) {
    switch(status.toLowerCase()) {
        case 'current':
        case 'active':
        case 'completed':
        case 'high':
            return 'status-active';
        case 'expiring soon':
        case 'pending':
        case 'scheduled':
        case 'in progress':
        case 'medium':
        case 'enrolled':
            return 'status-pending';
        case 'overdue':
        case 'expired':
        case 'low':
            return 'status-overdue';
        default:
            return 'status-pending';
    }
}

function getReportTitle(reportType) {
    switch(reportType) {
        case 'department':
            return 'Department Performance Report';
        case 'competency':
            return 'Competency Analysis Report';
        case 'training':
            return 'Training Effectiveness Report';
        case 'compliance':
            return 'Compliance Status Report';
        default:
            return 'General Report';
    }
}

// Action Functions (placeholders for full implementation)
function editCompetency(competencyId) {
    alert(`Edit competency ${competencyId} functionality would be implemented here.`);
}

function assignCompetency(competencyId) {
    alert(`Assign competency ${competencyId} functionality would be implemented here.`);
}

function editTraining(sessionId) {
    alert(`Edit training session ${sessionId} functionality would be implemented here.`);
}

function viewParticipants(sessionId) {
    alert(`View participants for session ${sessionId} functionality would be implemented here.`);
}

function updateCompliance(employeeId, competency) {
    alert(`Update compliance for ${employeeId} - ${competency} functionality would be implemented here.`);
}

function sendReminder(employeeId) {
    alert(`Send reminder to ${employeeId} functionality would be implemented here.`);
}

function editLearningPath(pathId) {
    alert(`Edit learning path ${pathId} functionality would be implemented here.`);
}

function viewLearningPathDetails(pathId) {
    alert(`View learning path ${pathId} details functionality would be implemented here.`);
}

function editSuccessionPlan(planId) {
    alert(`Edit succession plan ${planId} functionality would be implemented here.`);
}

function viewSuccessionPlanDetails(planId) {
    alert(`View succession plan ${planId} details functionality would be implemented here.`);
}

function viewESSDetails(itemId) {
    alert(`View ESS item ${itemId} details functionality would be implemented here.`);
}

function enrollESS(itemId) {
    alert(`Enroll/Update ESS item ${itemId} functionality would be implemented here.`);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadDashboard();
});