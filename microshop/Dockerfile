# Use official Python image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy backend code
COPY . /app

# Install dependencies
RUN pip install flask flask-cors pymongo

# Expose Flask's port
EXPOSE 5000

# Run the application
CMD ["python", "api.py"]
