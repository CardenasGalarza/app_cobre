from turtle import color
import numpy as np
import streamlit as st
import pandas as pd
import warnings
warnings.filterwarnings('ignore')
import mysql.connector
from mysql.connector import Error

import pandas as pd

df = pd.read_csv(r'http://10.226.120.172/lll/lll_data.txt', sep='|')

#df.columns =['Origen', 'Zonal', 'DDN', 'Ciudad', 'Telefono', 'Codigo Averia',
#       'Fecha Registro', 'Diag.', 'Area', 'Cabec.', 'Ubilic', 'Circuito',
#       'MDF', 'Armario', 'Cable_P', 'Par_P', 'Terminal', 'Cable_s', 'Par_s',
#       'Cab.Adsl', 'Par_Adsl', 'Puerto_adsl', 'codSeg', 'VACIO']


df.columns =['numtelefvoip', 'desobsordtrab', 'tiptecnologia_x', 'codnod', 
    'codcli', 'codreq', 'fec_regist', 'Area_CRM', 'desnomctr', 'desmotv', 
    'codofcadm', 'desdtt', 'nomcli', 'Categorization_Tier2', 'LastModifiedBy',	
    'CUSTOMERID_CRM__c', 'TELEFONO_REFERENCIA_1_CRM', 'servicioAfectado',	
    'ESTADO', 'GESTOR', 'FEC_PROG',	'FEC_CERRAR', 'ACCION', 'OBS']



#df.to_csv('cobredata.csv', sep=';', index=False)
df = df[['codreq','fec_regist','desnomctr','desmotv','codofcadm','desdtt','codcli','nomcli','numtelefvoip','desobsordtrab','tiptecnologia_x','codnod','Area_CRM','Categorization_Tier2','LastModifiedBy','CUSTOMERID_CRM__c','TELEFONO_REFERENCIA_1_CRM','servicioAfectado','ESTADO','GESTOR','FEC_PROG','FEC_CERRAR','ACCION','OBS']]


df['tiptecnologia_x']= 'COBRE'
df['ESTADO']= 'PENDIENTE'
df['GESTOR']= ''
df['FEC_PROG']= ''
df['FEC_CERRAR']= ''
df['ACCION']= ''
df['OBS']= ''
df['ACTIVO']= '0'
df['LLAMADA']= '0'
df['MENSAJE']= '0'

df = df[df.desnomctr.isin(['OOCC', '061'])]
df = df.sort_values(by='fec_regist').reset_index(drop=True)


df['fec_regist'] = pd.to_datetime(df.fec_regist, errors = 'coerce').dt.strftime("%Y/%m/%d  %H:%M:%S")
#df.to_csv('ihsaiohaih.csv', sep=';', index=False)
print(df)

df = pd.DataFrame(df).astype(str)

###FIXMEpara pedir la cantidad de datos [1] es la columna
shape = df.shape[1]
text = "%s," ##texto a multiplicar
repeated = text * shape #multiplicar
#repeated = list(repeated)
desobsordtrab = (str(repeated)[:-1]) #quitmanos los []
#print(desobsordtrab)

###FIXME DATOS DE COLUMNAS NOMBRES
df1 = df.columns
matriz_np = np.array(df1)
matriz_np = matriz_np.tolist()
string = (str(matriz_np)[1:-1])
characters = "'!?" ## QUITAMOS LOS ' PARA QUE ESTE SOLO CARACRETES EN LISTA
colum = ''.join( x for x in string if x not in characters)

############################################ OCULTAR INFROMACION NO IMPORTANTE
import warnings
warnings.filterwarnings('ignore')
#########################################3333
#######
## TODO CONECTION A LA BASE DE DATOS MYSQL
#######
#cnxn =  mysql.connector.connect( host="localhost",
#                                port="3306",
#                                user="root",
#                                passwd="CARDENAS47465810",
#                                db="bdtickets"
#                                )
#cursor = cnxn.cursor()

cnxn = mysql.connector.connect( host="us-cdbr-east-06.cleardb.net",
                                port="3306",
                                user="be690637bd68c4",
                                passwd="88b2781e",
                                db="heroku_4843d4a20ed7194"
                                )
cursor = cnxn.cursor()
#TODO Cargar data
#######
sql = f"""INSERT INTO bdtickets ({colum}) VALUES ({desobsordtrab})"""
for row in df.values.tolist():
    cursor.execute(sql, tuple(row))
cnxn.commit()


cursor.close()
cnxn.close()
print('listo carga datos')
