# Hospital and Medical Solution (HMS)
![Hospital and Medical Solution Logo](https://raw.githubusercontent.com/Learnathon-By-Geeky-Solutions/trio-tech-s-troupe/refs/heads/main/backend/HMS%20Logo.webp)

A modern, comprehensive platform designed to streamline medical services with advanced features, secure management, and user-friendly interfaces.

---

## Description
This project is a robust **Hospital and Medical Solution** application aimed at providing seamless healthcare services and administrative management. It integrates advanced searching, role-based authentication, payment processing, appointment scheduling, and real-time video consultancy with prescription management. Built with **Laravel 11** for the backend API and **React** for the frontend UI, it delivers a dynamic and efficient experience.

---

## Features
- **Website**: Landing page, advanced search, contact, partner, and about pages.
- **Authentication**: Login, register, and password reset.
- **Dashboard**: Profile management and traffic insights.
- **User Roles**: Patient, doctor, and admin with role-based features.
- **Healthcare Tools**: Appointment booking, 24-hour video consultancy, prescription, and medical history storage.
- **Report & Invoice**: Report upload/review and automated invoice generation.
- **Payments**: Stripe integration and manual payment.
- **Additional Tools**: Report maker, meeting scheduler, and insight forecasting.

---

## Installation
```sh

# Install dependencies
composer install

# Set up environment
cp .env.example .env

# Generate application key and optimize
php artisan key:generate
php artisan optimize:clear

# Start backend server
php artisan serve

# Run React frontend
npm install
npm start
```

---

## Usage
- Patients: Register, book appointments, consult doctors via video, upload reports, and store medical history.
- Doctors: Review reports, conduct video consultations, and manage prescriptions.
- Admins: Oversee system settings, roles, and traffic analytics.

---

