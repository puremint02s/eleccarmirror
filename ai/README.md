#학습된 모델 다운로드
sh modelDownload.sh 명령어 실행
trainedModel폴더가 생성되고 그 안에 keras.h5 모델 파일이 다운로드됩니다. 

#사용 파이썬 모듈 requirement.txt에 저장
pip freeze > requirements.txt    

#패키지 한번에 설치
pip install -r requirements.txt

설치 모듈 정리
sudo pip install pillow
sudo pip install numpy
sudo pip install flask
sudo pip install tensorflow
sudo pip install matplotlib