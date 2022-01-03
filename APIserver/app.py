from flask import Flask
from flask import jsonify
from flask import request
import numpy as np
import tensorflow as tf
import cv2 as cv2
from flask_cors import CORS
#
cnn = tf.keras.models.load_model('models/numberFinder.tf')
def main_predictor(image):
    image = image.reshape((1,) + image.shape)
    vec = cnn.predict(image)
    pred = np.argmax(vec)
    return(pred)
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def hello_world():
	return 'server running'

@app.route('/numberFinder',methods=['POST'])
def number_finder():
	if request.method == 'POST':
		f = request.files['imageNumber']
		f.save('images/saved/'+f.filename)
		image = cv2.imread('images/saved/'+f.filename,cv2.IMREAD_GRAYSCALE)
		image = cv2.resize(image, (28,28), interpolation = cv2.INTER_AREA)
		cv2.imwrite('images/processed/'+f.filename, image)
		predNum = main_predictor(image)
		print(predNum)
		return jsonify({"return":str(predNum)})


	return 'error'

# main driver function
if __name__ == '__main__':
	app.run(port=5000)
