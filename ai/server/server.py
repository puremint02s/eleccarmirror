import io
# 파일 경로 접근시 필요한 python 내장 라이브러리
from PIL import Image
# Python Imaging Library. 파이썬 인터프리터에 다양한 이미지 파일 형식을 지원,
import numpy as np
# 강력한 이미지처리와 그래픽 기능 제공 오픈소스 라이브러리


from flask import Flask
# python web framework
from flask import request
# 웹 요청 관련 모듈
from flask import render_template, redirect, url_for, request
# flask에서 필요한 모듈
from flask import jsonify
# import JSON을 해도되지만 여기서는 flask 내부에서 지원하는 jsonify를 사용

import tensorflow
from tensorflow import keras
from keras.models import Sequential
from keras.utils import Sequence
# 이 모듈이 없으면 사용자가 만든 generator에서 'shape'가 없다고 하는 에러가 발생할 수 있음
import matplotlib.pyplot as plt


app = Flask(__name__)
dicModelIndex = {'kia mohave': 0, 'hyundai kona': 1, 'kia sorento': 2, 'genesis g90': 3, 'chevrolet trailblazer': 4, 'kia sportage': 5, 'ssangyong torres': 6, 'genesis g70': 7, 'hyundai palisade': 8, 'renault qm6': 9, 'kia k3': 10, 'kia k5': 11, 'hyundai avante': 12, 'ssangyong rexton': 13, 'kia seltos': 14,
                 'chevrolet spark': 15, 'hyundai santafe': 16, 'hyundai venue': 17, 'kia carnival': 18, 'kia morning': 19, 'renault xm3': 20, 'hyundai sonata': 21, 'hyundai grandeur': 22, 'genesis g80': 23, 'renault sm6': 24, 'kia k9': 25, 'hyundai tucson': 26, 'hyundai casper': 27, 'kia k8': 28, 'ssangyong tivoli': 29, 'kia ray': 30}
dicIndexModel = {v: k for k, v in dicModelIndex.items()}


@app.route('/')
def index():
    print('ai server open!')
    return 'Welcome!!'  # 리턴값은 기본적으로 문자열


@app.route('/predict', methods=["POST"])
def predict():
    filename = request.json['filename']
    print('모델 로드 준비...')
    model = keras.models.load_model('../trainedModel/keras.h5')
    model.summary()
    print('모델 로드 완료')

    image = Image.open('../../back_/uploads/'+filename)
    print('이미지 로드 완료')

    image = image.resize((224, 224))
    image = image.convert('RGB')
    image = np.array(image)
    print(image.shape)

    image = image.astype(np.float32) / 255.
    print(image.shape)
    image = np.expand_dims(image,  axis=0)
    print(image.shape)
    pred = model.predict(image)
    print(pred.shape)
    list = pred[0].tolist()
    print(list)
    return jsonify(list)


if __name__ == "__main__":
    # debug=True, 코드 수정시 자동으로 플라스크 꺼졌다가 다시 켜져서 브라우저에 적용
    app.run(host='0.0.0.0', port=5005)
