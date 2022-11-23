# 원본 이미지 넘버링하기
## original 폴더에 모든 이미지 데이터가 있고 -> 여기서 파일명 넘버링 한 후 train과 test 폴더로 나눔
## 아래는 original 폴더의 이미지 파일명들을 넘버링하는 코드

import os
import glob

path = "original 폴더 path"
kia = glob.glob(path+"/kia" + '/*')
hyundai = glob.glob(path+"/hyundai"+'/*')
tesla = glob.glob(path+"/tesla"+'/*')

def rename(files):
  if 'kia' in files[0]:
     for i,f in enumerate(files):
         os.rename(f, os.path.join(path+"/kia", 'kia_' + '{0:03d}.jpg'.format(i)))
     kia = glob.glob(path+"/kia" + '/*')    
     print("kia {}번째 이미지까지 성공".format(i+1))

  elif 'hyundai' in files[0]:
     for i,f in enumerate(files):
         os.rename(f, os.path.join(path+"/hyundai", 'hyundai_' + '{0:03d}.jpg'.format(i)))
     hyundai = glob.glob(path+"/hyundai"+'/*')
     print("hyundai {}번째 이미지까지 성공".format(i+1))

  elif 'tesla' in files[0]:
     for i,f in enumerate(files):
         os.rename(f, os.path.join(path+"/tesla", 'tesla_' + '{0:03d}.jpg'.format(i)))
     tesla = glob.glob(path+"/tesla"+'/*')
     print("tesla {}번째 이미지까지 성공".format(i+1))

# 위에서 정의한 함수 사용 -> 한번만 실행하고 주석처리 해줘야 함
rename(kia)
rename(hyundai)
rename(tesla)

# 이미지 리스트 정렬
kia = sorted(glob.glob(path+"/kia" + '/*'))
hyundai = sorted(glob.glob(path+"/hyundai"+'/*'))
tesla = sorted(glob.glob(path+"/tesla"+'/*'))

print('kia 이미지 개수: {}\nhyundai 이미지 개수: {}\ntesla 이미지 개수: {}'.format(len(kia), len(hyundai), len(tesla)))

# 전체 이미지 개수 및 종류 별 개수 비율
## 종류 별 밸런스가 맞아야 함
whole_sum = len(kia)+len(hyundai)+len(tesla)

print('전체 이미지 개수 : {}\n\nkia 이미지 비율 : {:.2f}%\nhyundai 이미지 비율 : {:.2f}%\ntesla 이미지 비율 : {:.2f}%'.format( whole_sum, 100*len(kia)/whole_sum, 100*len(hyundai)/whole_sum, 100*len(tesla)/whole_sum ))

# original 폴더의 이미지들을 train, test 으로 나누기
## 여기서는 train:test를 8:2로 했음

import random

kia_test_count = round(len(kia)*0.2)
hyundai_test_count = round(len(hyundai)*0.2)
tesla_test_count = round(len(tesla)*0.2)

print('kia test파일에 들어갈 이미지 개수 : {}/{}'.format(kia_test_count,len(kia)))
print('hyundai test파일에 들어갈 이미지 개수 : {}/{}'.format(hyundai_test_count,len(hyundai)))
print('tesla test파일에 들어갈 이미지 개수 : {}/{}'.format(tesla_test_count,len(tesla)))

# shutil 모듈로 파일을 원하는 경로에 복사해주는 split 함수 생성
import shutil

def split( img_list, test_count, train_path, test_path):
  test_files=[]
  for i in random.sample( img_list, test_count ):
    test_files.append(i)

  # 차집합으로 train/test 리스트 생성하기
  train_files = [x for x in img_list if x not in test_files]

  for k in train_files:
    shutil.copy(k, train_path)
  
  for c in test_files:
    shutil.copy(c, test_path)

  print('train 폴더 이미지 개수 : {}\ntest 폴더 이미지 개수 : {}'.format(len(glob.glob(train_path+'/*')),len(glob.glob(test_path+'/*'))))

kia_train_path='train/kia 경로'
kia_test_path='test/kia 경로'

hyundai_train_path='train/hyundai 경로'
hyundai_test_path='test/hyundai 경로'

tesla_train_path='train/tesla 경로'
tesla_test_path='test/tesla 경로'

split(kia, kia_test_count, kia_train_path, kia_test_path)
split(hyundai, hyundai_test_count, hyundai_train_path, hyundai_test_path)
split(tesla, tesla_test_count, tesla_train_path, tesla_test_path)

# train, test 폴더가 랜덤 추출 되었으므로 다시 파일명 넘버링
path = "train 폴더 경로"
kia = glob.glob(path+"/kia" + '/*')
hyundai = glob.glob(path+"/hyundai"+'/*')
tesla = glob.glob(path+"/tesla"+'/*')

print('각각 마지막 파일 이름 : ',os.path.basename(sorted(kia)[-1]), os.path.basename(sorted(hyundai)[-1]), os.path.basename(sorted(tesla)[-1]))

path = "test 폴더 경로"
kia = glob.glob(path+"/kia" + '/*')
hyundai = glob.glob(path+"/hyundai"+'/*')
tesla = glob.glob(path+"/tesla"+'/*')

print('각각 마지막 파일 이름 : ',os.path.basename(sorted(kia)[-1]), os.path.basename(sorted(hyundai)[-1]), os.path.basename(sorted(tesla)[-1]))