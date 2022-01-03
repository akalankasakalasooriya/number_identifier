FROM python:3.7-slim
WORKDIR /code
COPY . .
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
EXPOSE 5000
RUN pip install -r requirements.txt
CMD ["python3", "./app.py"]
