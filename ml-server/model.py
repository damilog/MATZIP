import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pickle
import joblib

from kmodes.kmodes import KModes

%matplotlib inline

df = pd.read_csv("/Users/a1101725/Downloads/matzips - result.csv", thousands = ',')

df.drop(columns = ['matzip.title','구분'], inplace=True)
df.set_index("matzip.id")

df_labeled = df.copy()

# 라벨링
df_labeled['avg(matzipreview)_label'] = pd.qcut(df_labeled['avg(matzipreview)'], 3, labels = ['보통','만족','아주만족'])
df_labeled['count(matzipreview)_label'] = pd.qcut(df_labeled['count(matzipreview)'], 4, labels = ['적음','보통','많음','아주많음'])
df_labeled['matzip.price_label'] = pd.qcut(df_labeled['matzip.price'], 4, labels = ['저렴','보통','비쌈','아주비쌈'])

df_labeled.drop(columns = ['avg(matzipreview)','count(matzipreview)','matzip.price'], inplace=True)

df_labeled = df_labeled.set_index('matzip.id')

# 모델링
cost = []
k = range(1,10)
for num_clusters in list(k):
  kmode = KModes(n_clusters=num_clusters, init="Huang", n_init = 5, verbose = 1, random_state = 223)
  kmode.fit_predict(df_labeled)
  cost.append(kmode.cost_)

plt.plot(k, cost, 'bx-')
plt.xlabel('No. of Clusters')
plt.ylabel('Cost')
plt.title('Number of Optimize K')
plt.show()

# k=7인 kmodes 모델 만들기
# init = ['Huang', 'Cao','random']
kmodes = KModes(n_clusters = 7, init = "Huang", n_init = 5, verbose = 1 )
kmode_clusters = kmodes.fit(df_labeled)

kmode_clusters.labels_
df_labeled.insert(0,'cluster', kmode_clusters.labels_, False)

# 클러스터에 따른 결과 확인
cluster_dict = {}
for i in range(7):
  cluster_dict[i] = df_labeled.index[df_labeled['cluster']==i].tolist()

# 각 클러스터에 해당하는 음식점 리스트 저장
with open("cluster_dict","wb") as fw:
  pickle.dump(cluster_dict,fw)

#모델 덤프파일 저장
joblib.dump(kmode_clusters, 'kmode_model.pkl')