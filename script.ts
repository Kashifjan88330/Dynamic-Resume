// Get references to form elements
const nameField = document.getElementById("name") as HTMLInputElement;
const emailField = document.getElementById("email") as HTMLInputElement;
const phoneField = document.getElementById("phone") as HTMLInputElement;
const addressField = document.getElementById("address") as HTMLInputElement;
const educationField = document.getElementById("education") as HTMLInputElement;
const gradYearField = document.getElementById("gradYear") as HTMLInputElement;
const companyField = document.getElementById("company") as HTMLInputElement;
const positionField = document.getElementById("position") as HTMLInputElement;
const yearsField = document.getElementById("years") as HTMLInputElement;
const skillsField = document.getElementById("skills") as HTMLTextAreaElement;

const generateCVButton = document.getElementById("generateCVBtn") as HTMLButtonElement;
const resumeSection = document.getElementById("resumeSection") as HTMLDivElement;

// Resume display elements
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeAddress = document.getElementById("resumeAddress") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeGradYear = document.getElementById("resumeGradYear") as HTMLParagraphElement;
const resumeWork = document.getElementById("resumeWork") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;

// Function to generate and display the resume
const generateResume = () => {
    // Collect form data
    const name = nameField.value;
    const email = emailField.value;
    const phone = phoneField.value || "Not Provided";
    const address = addressField.value || "Not Provided";
    const education = educationField.value;
    const gradYear = gradYearField.value;
    const company = companyField.value;
    const position = positionField.value;
    const years = yearsField.value;
    const skills = skillsField.value;

    // Populate resume sections
    resumeName.textContent = name || "Your Full Name";
    resumeEmail.textContent = email ? `Email: ${email}` : "Email: Not Provided";
    resumePhone.textContent = `Phone: ${phone}`;
    resumeAddress.textContent = `Address: ${address}`;

    resumeEducation.textContent = `Degree/School: ${education}`;
    resumeGradYear.textContent = `Graduation Year: ${gradYear}`;

    resumeWork.textContent = `Company: ${company}, Position: ${position}, Years Worked: ${years}`;
    
    // Process skills (if any)
    resumeSkills.textContent = skills ? `Skills: ${skills}` : "Skills: Not Provided";

    // Show the resume section
    resumeSection.style.display = "block";
};

// Add event listener for the "Generate CV" button
generateCVButton.addEventListener("click", generateResume);
