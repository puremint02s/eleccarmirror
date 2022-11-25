
## 모델학습
- modelTest.py 파일로 실행합니다.
- 일단 resnet50 동작여부를 알기 위해 기아 차량 모델 분류를 먼저 테스트하도록 합니다.
- modelTest.py 코드는 모델 이후 학습 결과 시각화까지 포함되어있으며 이후 모델평가 및 재평가는 결과를 보고 추가해야 할거같습니다. 

## 모델학습 datasets
데이터셋의 형태는 아래와 같습니다. 파이썬 코드에서 제대로 동작하도록 경로를 맞춰두었습니다. 

datasets
ㄴcarData
	ㄴtrain
		ㄴKia_Cadenza_2014
		ㄴKia_Cadenza_2015
		ㄴ...
	ㄴtest
		ㄴKia_Cadenza_2014
		ㄴKia_Cadenza_2015
		ㄴ...

## 파일명으로 이미지 폴더 분류
파일명을 '-'로 나누고 나온 0,1,2 인덱스를 '-'으로 join한 한것으로 이미지를 분류합니다.
-> 10, 11, 36, 37번째줄 코드에서 조건 설정이 가능합니다. 

1. main부분의 path_before에 분류하고 싶은 이미지들이 들어있는 경로를 설정합니다.
2. main부분의 path_after에 분류될 경로를 설정합니다.
3. folderOrganize.py 파일을 실행합니다.
	