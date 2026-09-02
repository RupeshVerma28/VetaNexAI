# 🩺 VetaNexAI

### AI-Powered Health Awareness & Wellness Assistant

VetaNexAI is a modern health-awareness web application designed to help users understand common health measurements, explore health-related information, perform wellness calculations, and interact with a health-focused chatbot.

The platform brings together **health information, interactive calculators, a structured health chatbot, and optional AI-powered conversations** into a single, easy-to-use interface.

> ⚠️ **Medical Disclaimer:** VetaNexAI is an educational and health-awareness platform. It does not provide medical diagnoses, replace professional medical advice, or prescribe treatment. Information and calculations are intended for general informational purposes only.

---

## 🌐 Live Demo

**VetaNexAI:**  
https://vetanexai.netlify.app/

---

## ✨ Why VetaNexAI?

Understanding basic health information can often be difficult for people who do not have a medical background.

Users may have questions such as:

- What is a normal body temperature?
- Is my BMI within a healthy range?
- How much water should I drink?
- What does hemoglobin mean in a blood report?
- What does a high or low blood-pressure reading generally mean?
- What are common causes of a headache?
- How can I improve my sleep?
- What does a particular vitamin or mineral do?

VetaNexAI aims to provide a **simple starting point for health awareness** by bringing commonly needed information and interactive tools together in one platform.

---

# 🚀 Key Features

## 🏠 1. Health-Focused Landing Page

The landing page introduces the VetaNexAI platform and provides quick navigation to its major features.

Users can easily discover:

- Health Library
- Health Calculators
- Health Chatbot
- AI Chat Mode
- Wellness information
- Important health resources

The interface is designed with a modern health-tech aesthetic and responsive navigation.

---

# 📚 2. Health Library

The Health Library is one of the core modules of VetaNexAI.

It provides structured, easy-to-understand information about common health measurements and laboratory parameters.

### Categories include:

#### 🩸 Complete Blood Count (CBC)

Information about commonly reported parameters such as:

- Hemoglobin (Hb)
- RBC
- WBC
- Platelets
- Hematocrit
- MCV
- MCH
- MCHC
- RDW
- Neutrophils
- Lymphocytes
- Monocytes
- Eosinophils
- Basophils

#### 🧪 Blood Chemistry

Includes information about parameters such as:

- Blood Glucose
- HbA1c
- Creatinine
- Urea / BUN
- Uric Acid
- Sodium
- Potassium
- Calcium
- Magnesium
- Phosphorus
- Albumin
- Total Protein
- Bilirubin

#### ❤️ Vital Signs

Users can learn about:

- Body Temperature
- Blood Pressure
- Heart Rate
- SpO₂
- Respiratory Rate

#### 🫀 Lipid Profile

Information about:

- Total Cholesterol
- LDL
- HDL
- Triglycerides
- Non-HDL Cholesterol

#### 🧬 Liver & Kidney Health

Reference information for commonly reported:

- ALT / SGPT
- AST / SGOT
- ALP
- GGT
- Bilirubin
- Creatinine
- eGFR
- Urea / BUN

#### 💊 Vitamins

Information about commonly discussed vitamins including:

- Vitamin A
- Vitamin B1
- Vitamin B2
- Vitamin B3
- Vitamin B5
- Vitamin B6
- Vitamin B7
- Vitamin B9
- Vitamin B12
- Vitamin C
- Vitamin D
- Vitamin E
- Vitamin K

#### 🥦 Minerals & Electrolytes

Includes information about:

- Iron
- Calcium
- Magnesium
- Potassium
- Sodium
- Zinc
- Phosphorus
- Copper
- Selenium
- Iodine

### Health Library Features

- 🔎 Search health information
- 🗂️ Category filtering
- 📖 Detailed information cards
- 📊 Reference-range information
- 👤 Age/sex considerations where applicable
- 🔗 Links to relevant calculators
- 📱 Responsive card-based interface
- 📌 Easy-to-understand explanations

> **Important:** Laboratory reference ranges can vary depending on age, sex, laboratory methods, units, pregnancy status, and other factors. Users should always prioritize the reference range provided on their own laboratory report and consult a qualified healthcare professional for interpretation.

---

# 🧮 3. Health Calculators

VetaNexAI provides a collection of interactive frontend-based health and wellness calculators.

### 🧍 Body & BMI

- BMI Calculator
- BMR Calculator
- Ideal Weight Calculator
- Body Fat Percentage Calculator
- Lean Body Mass Calculator
- Waist-to-Height Ratio Calculator

### 🍎 Nutrition

- Daily Calorie Requirement
- Calorie Deficit / Surplus
- Protein Requirement
- Macronutrient Calculator
- Calorie Burn Calculator

### 🌙 Lifestyle

- Water Intake Calculator
- Sleep Calculator
- Target Heart Rate Calculator
- Heart Rate Zone Calculator

### Calculator Experience

Each calculator provides:

- Clearly labeled inputs
- Input validation
- Calculation results
- Result interpretation
- Reset functionality
- Responsive UI
- Relevant health information
- Appropriate safety/disclaimer messaging

The calculations are performed using deterministic TypeScript/JavaScript logic rather than relying on an AI model.

---

# 🤖 4. Basic Health Chatbot

VetaNexAI includes a frontend-based **Basic Health Chatbot** designed to answer common health-awareness questions.

The chatbot uses **keyword/intent matching** to identify the general topic of the user's question and return an appropriate predefined response.

For example, users can ask:

```text
"Mujhe fever hai"

"My BP is high"

"Mere sir me dard ho raha hai"

"How can I gain weight?"

"Mujhe neend nahi aati"

"Vitamin D deficiency ke baare mein batao"
```

The chatbot identifies the relevant health topic and provides structured general information.

### Supported Topics

The chatbot can provide general guidance for topics such as:

- Fever
- Headache
- Stomach pain
- Knee/joint pain
- High blood pressure
- Low blood pressure
- High blood sugar
- Low blood sugar
- Hemoglobin/blood deficiency
- Vitamin deficiencies
- Mineral deficiencies
- Weight loss
- Healthy weight gain
- Sleep problems
- General health measurements

### Structured Responses

Responses are designed around a consistent structure:

```text
User Question
      ↓
Message Normalization
      ↓
Health Intent Detection
      ↓
Topic Identification
      ↓
Relevant Health Guidance
      ↓
Home-Care Guidance (where appropriate)
      ↓
Precautions
      ↓
Related Health Library / Calculator
      ↓
When Professional Medical Care Is Needed
```

The chatbot does **not** attempt to diagnose medical conditions.

Instead of saying:

> "You have anemia."

it provides educational information such as:

> "Low hemoglobin can be associated with several conditions. A healthcare professional may need to evaluate your symptoms and blood-test results."

---

# 🧠 5. AI Chat Mode

VetaNexAI also supports an optional AI-powered chat mode.

The architecture allows users to provide a compatible AI API configuration and interact with an AI model through the application.

If an AI configuration is unavailable, the application can continue using the Basic Health Chatbot experience.

This provides two different interaction modes:

```text
                 HEALTH CHATBOT
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
       BASIC MODE             AI MODE
             │                   │
     Intent / Keyword       AI Model API
         Matching               │
             │                   │
     Predefined Health      Conversational
        Guidance              Responses
```

> AI-generated responses should also be treated as informational and should not be considered a medical diagnosis.

---

# 🔗 6. Connected Health Experience

VetaNexAI is designed so that its major features work together instead of functioning as isolated pages.

For example:

```text
User asks:
"My BP is high"
        ↓
Basic Health Chatbot
        ↓
General information
        ↓
Precautions
        ↓
When to seek medical help
        ↓
┌───────────────────────────┐
│ Related Health Resources  │
├───────────────────────────┤
│ Blood Pressure Information│
│ Check Blood Pressure      │
└───────────────────────────┘
```

Similarly:

```text
"How much water should I drink?"
             ↓
       Chatbot Response
             ↓
     Water Intake Information
             ↓
     Water Intake Calculator
```

This creates a more cohesive user experience across the application.

---

# 🎨 7. Modern & Responsive UI

VetaNexAI is designed to work across different screen sizes.

### Supported layouts

- 📱 Mobile
- 📱 Large mobile
- 📟 Tablet
- 💻 Laptop
- 🖥️ Desktop
- 🖥️ Large displays

The interface uses reusable components, responsive layouts, modern cards, subtle animations, and consistent visual hierarchy.

---

# 🧩 8. Modular Component Architecture

The application is designed using reusable React components.

Major modules are separated into independent components so that individual features can be modified without unnecessarily affecting other parts of the application.

Example conceptual structure:

```text
src/
│
├── components/
│   ├── chatbot/
│   ├── calculators/
│   ├── health-library/
│   ├── layout/
│   └── ui/
│
├── data/
│   ├── chatbot/
│   ├── calculators/
│   └── health-library/
│
├── utils/
│   ├── chatbot/
│   └── calculators/
│
├── types/
│
└── App.tsx
```

This makes the project easier to:

- Maintain
- Debug
- Extend
- Test
- Reuse
- Scale

---

# 🛠️ Technology Stack

## Frontend

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **Framer Motion**

## Application Logic

- TypeScript
- JavaScript
- Client-side calculation utilities
- Keyword/intent-based chatbot engine
- Local frontend state management

## AI Integration

- AI API integration support
- API-based conversational interaction
- Configurable AI model integration

## Deployment

- **Netlify**
- **GitHub**

---

# 📂 Core Modules

| Module | Purpose |
|---|---|
| 🏠 Landing Page | Introduces VetaNexAI and its features |
| 📚 Health Library | Health and laboratory reference information |
| 🧮 Health Calculators | Interactive health & wellness calculations |
| 🤖 Basic Chatbot | Keyword-based health information assistant |
| 🧠 AI Chat | AI-powered conversational mode |
| 🔎 Search | Quickly find health information and calculators |
| 📱 Responsive UI | Cross-device experience |

---

# 🎯 Use Cases

VetaNexAI can be useful for:

### 👤 General Users

People who want to understand common health measurements and wellness concepts in simple language.

### 📊 Health Awareness

Users can learn about:

- Blood pressure
- Temperature
- Heart rate
- BMI
- Blood-test parameters
- Vitamins
- Minerals
- Cholesterol
- Blood sugar

### 🧪 Understanding Blood Reports

Users can use the Health Library as a starting point for understanding what common parameters such as:

```text
Hb
RBC
WBC
Platelets
MCV
Creatinine
Glucose
ALT
AST
LDL
HDL
```

generally represent.

### 🧮 Personal Wellness Calculations

Users can estimate:

- BMI
- BMR
- Calorie requirements
- Protein requirements
- Water intake
- Body composition metrics
- Heart-rate zones

### 🎓 Educational Use

The project can also be used as an educational demonstration of:

- React component architecture
- TypeScript
- Frontend application design
- API integration
- Intent-based chatbot systems
- Responsive UI development
- Client-side computation
- Modular software architecture

---

# 🔐 Privacy & Security Considerations

VetaNexAI is designed with a frontend-first architecture.

The application should avoid storing sensitive health information unnecessarily.

Users should:

- Avoid entering personally identifiable medical information into public/demo environments.
- Avoid sharing confidential medical reports or credentials.
- Never expose private AI API keys in publicly accessible frontend code.

If an AI API requires a secret key, a production implementation should use a secure backend/proxy rather than exposing the secret directly in client-side code.

---

# ⚠️ Medical Disclaimer

VetaNexAI is **not a medical diagnostic system**.

The application provides:

- General health information
- Educational content
- Wellness calculations
- General self-care information
- Health-awareness resources

It does **not**:

- Diagnose diseases
- Replace doctors
- Prescribe medication
- Replace laboratory interpretation
- Provide emergency medical care

Health measurements and laboratory results can vary depending on age, sex, laboratory methods, units, medical history, medications, pregnancy status, and other factors.

If you have concerning, severe, persistent, or rapidly worsening symptoms, seek appropriate medical attention.

In an emergency, contact your local emergency medical service.

---

# 💻 Getting Started

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

Check your versions:

```bash
node --version
npm --version
git --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/RupeshVerma28/VetaNexAI.git
```

Navigate into the project:

```bash
cd VetaNexAI
```

Install dependencies:

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

The application will be available through the local development URL provided by Vite.

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🌐 Deployment

VetaNexAI is configured for deployment on **Netlify**.

Typical deployment flow:

```text
GitHub Repository
       ↓
     Netlify
       ↓
Install Dependencies
       ↓
npm run build
       ↓
     dist/
       ↓
   Live Website
```

Live application:

**https://vetanexai.netlify.app/**

---

# 🔮 Future Improvements

VetaNexAI can be expanded significantly in future versions.

Potential improvements include:

- 👤 User accounts and personalized health profiles
- 📊 Personal health dashboard
- 📈 Health measurement history
- 📄 Blood report upload and analysis
- 🧠 Advanced AI health assistant
- 🔐 Secure backend architecture
- 🗄️ Database-backed health records
- 🏥 Doctor/healthcare-provider directory
- 📅 Appointment assistance
- 🌐 Multilingual health assistant
- 🎙️ Voice-based health chatbot
- 📱 Progressive Web App capabilities
- 🔔 Health reminders
- 📊 Personal wellness analytics
- 🧪 More laboratory reference information
- 🤖 AI-assisted report explanation

---

# 🧑‍💻 Project Development

VetaNexAI was developed as a final-year academic project with the objective of demonstrating how modern web technologies and AI capabilities can be combined to create a practical health-awareness platform.

The project focuses on:

**User Experience + Health Information + Interactive Tools + AI Integration**

rather than attempting to replace professional healthcare services.

---

# 📜 License

This project is intended for educational and academic purposes.

Add an appropriate open-source license to this repository if you plan to distribute the source code publicly.

---

# ⭐ Acknowledgements

VetaNexAI uses several open-source technologies and libraries that make the project possible, including:

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Framer Motion

Special consideration should be given to the original documentation and licensing terms of each dependency.

---

## 🩺 VetaNexAI

**Understand your health. Explore your numbers. Make informed decisions.**

> VetaNexAI is a health-awareness platform—not a replacement for professional medical care.