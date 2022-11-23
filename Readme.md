## 실행순서
1. ImageFolder.py
2. ResNet50.py

## 참고사항
1. 사전에 이미지 폴더 구조를 조정해야 합니다. 아래는 폴더 구조 예시입니다.   
   **project folder**
    - original(모든 이미지 넣어놓기)
      - kia
      - hyundai
      - tesla
    - test(빈 폴더로 두기)
      - kia
      - hyundai
      - tesla
    - train(빈 폴더로 두기)
      - kia
      - hyundai
      - tesla
2. 크롤링한 이미지를 코랩에서 학습 해야할 것 같습니다.
3. 변수명을 돌고래, 상어, 고래 에서 -> 기아, 현대, 테슬라로 바꿔놓긴 했는데 가지고 계신 이미지 데이터들에 따라 추가하거나 수정해야 합니다.
4. 코드 내에 폴더 경로를 지정해야 하는 부분이 있습니다.
5. 텐서보드, 파인튜닝 전 resnet50 모델 학습까지만 가져왔습니다.

출처 : https://inhovation97.tistory.com/40