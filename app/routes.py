from flask import Blueprint, render_template, request
from .models import Appointment
from . import db
from flask import render_template
from app.models import Appointment
from flask import render_template, request, redirect, url_for, flash

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('index.html')

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/departments')
def departments():
    return render_template('departments.html')

@main.route('/doctors')
def doctors():
    return render_template('doctors.html')

@main.route('/services')
def services():
    return render_template('services.html')


@main.route('/appointment', methods=['GET', 'POST'])
def appointment():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        date = request.form['date']
        time = request.form['time']
        message = request.form['message']

        new_appointment = Appointment(
            name=name,
            email=email,
            phone=phone,
            date=date,
            time=time,
            message=message
        )

        try:
            db.session.add(new_appointment)
            db.session.commit()
            flash('Appointment submitted successfully!', 'success')
            return redirect(url_for('main.appointment'))
        except Exception as e:
            db.session.rollback()
            flash(f'Error submitting appointment: {e}', 'danger')

    return render_template('appointment.html')


@main.route('/contact')
def contact():
    return render_template('contact.html')

@main.route('/admin/appointments')
def admin_appointments():
    appointments = Appointment.query.order_by(Appointment.created_at.desc()).all()
    return render_template('admin_appointments.html', appointments=appointments)
