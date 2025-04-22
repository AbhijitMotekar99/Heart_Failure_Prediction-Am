# 💓 Heart Failure Prediction using Ensemble Learning Techniques

This project predicts the likelihood of heart failure using **ensemble machine learning techniques**, mainly through a **bagging strategy** that combines four models: Random Forest, Decision Tree, SVM, and XGBoost. This ensemble boosts accuracy and reliability in early diagnosis. Additionally, the system features a simple **chatbot interface** to interactively guide users through predictions and health-related queries.



## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Dataset Information](#dataset-information)
- [Modeling Approach](#modeling-approach)
- [Results](#results)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)
- [Contributors](#contributors)

---

## 📖 About the Project

Cardiovascular diseases are a major cause of death worldwide. Predicting heart failure risks can assist healthcare professionals in early intervention. This project focuses on **training multiple ensemble models** to provide an accurate and reliable prediction based on key health indicators.

---

## 🛠️ Tech Stack

- Python 🐍
- NumPy & Pandas 📊
- Scikit-Learn 🔍
- Matplotlib & Seaborn 📈
- XGBoost ⚙️
- Jupyter Notebook 📓

---

## 🧾 Dataset Information

- Source: [Heart Failure Prediction Dataset](https://www.kaggle.com/datasets/fedesoriano/heart-failure-prediction)
- Total Records: `918`
- Attributes: `12`
- Target Variable: `HeartDisease` (0 = No Disease, 1 = Disease)

### 📌 Features Description:

| Feature         | Description                             |
|-----------------|-----------------------------------------|
| `Age`           | Age                                     |
| `Sex`           | Sex                                     |
| `ChestPainType` | Chest pain type                         |
| `RestingBP`     | Resting blood pressure                  |
| `Cholesterol`   | Serum cholesterol                       |
| `FastingBS`     | Fasting blood sugar                     |
| `RestingECG`    | Resting electrocardiogram results       |
| `MaxHR`         | Maximum heart rate achieved             |
| `ExerciseAngina`| Exercise induced angina                 |
| `Oldpeak`       | ST depression induced by exercise       |
| `ST_Slope`      | Slope of the peak exercise ST segment   |
| `HeartDisease`  | Target variable (0 = No, 1 = Yes)       |


---

## 🧠 Modeling Approach

We used the Bagging ensemble method by combining following individual models:

1. **Random Forest**
2. **XGBoost**
3. **Decision Tree**
4. **Support Vector Machine**

### 🔍 Evaluation Metrics:
- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC

---

## 📊 Results

### 🔹 Performance of Individual Algorithms

| Methods        | Precision | Recall | F1 Score | Accuracy |
|----------------|-----------|--------|----------|----------|
| Random Forest  | 0.86      | 0.86   | 0.86     | 0.88     |
| Decision Tree  | 0.69      | 0.86   | 0.77     | 0.78     |
| SVM            | 0.82      | 0.84   | 0.83     | 0.86     |
| XGBoost        | 0.84      | 0.88   | 0.86     | 0.88     |

### 🔹 Performance of Ensemble Techniques

| Methods             | Precision | Recall | F1 Score | Accuracy |
|---------------------|-----------|--------|----------|----------|
| Bagging Ensemble    | 0.91      | 0.88   | 0.90     | 0.89     |
| Stacking            | 0.90      | 0.88   | 0.89     | 0.88     |
| AdaBoost            | 0.86      | 0.78   | 0.82     | 0.80     |


---

## 🚀 How to Run

1. Clone the repository  
   ```bash
   git clone https://github.com/<your-username>/heart-failure-prediction.git
   cd heart-failure-prediction

2. Install Required Packages  
   ```bash
   pip install -r requirements.txt

2. Run the Application  
   ```bash
   python app.py

---

## 📸 Screenshots
![1](https://github.com/user-attachments/assets/781782ce-1955-45b1-9e07-3bec583859a0)
![2](https://github.com/user-attachments/assets/043ac1cc-3545-48c7-9f3f-0f5d4e295a32)
![3](https://github.com/user-attachments/assets/2fc14bc9-e005-4143-a42a-b36526c88924)
![4](https://github.com/user-attachments/assets/28f7b092-3b78-4225-96e0-8c2c5f3c53c3)
![5](https://github.com/user-attachments/assets/bcc4a84e-e7fb-407d-a652-f6246860c421)
![6](https://github.com/user-attachments/assets/3a5486f3-a4f6-438b-a218-87dd14fd3a5a)

---

## 👥 Contributors

We proudly present the team behind this project:

- **Abhijit Motekar**  
- **Gayatri Joshi**  
- **Aditya Jaiswal**  
- **Sanket Deshmukh**  

