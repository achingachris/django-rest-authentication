FROM python:3.9

#work dir
WORKDIR /auth-app

#installing dependencies
COPY requirements.txt /auth-app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /auth-app/

# Run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
