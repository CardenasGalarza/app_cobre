import streamlit as st

import mysql.connector
from mysql.connector import Error
import warnings
warnings.filterwarnings('ignore')
#####3333
##########################
import time
from datetime import datetime
import pandas as pd
###############33
##data



st.set_page_config(page_title='bdtickets-Averias', page_icon="📨", layout='centered', initial_sidebar_state='auto')

st.title('📨APP GESTION ENVIAR MENSAJE')
## borrar nombres de la pagina

col1, col2, col3 = st.columns(3)



with col2:
    nombre = st.sidebar.selectbox(
        'Ingresa tu nombre',
        ('', 'AARON',	'ALONDRA',	'ANGEL',	'BERENICE',	'BLANCA',	'CESAR',	'CRISTHIAN',	'DENISSE',	'DHALIA',	'DIANA',	'EDER',	'EDINSON',	'EDUARDO',	'EDWIN',	'ELIZABETH NOVOA',	'ELIZABETH RIVERA',	'ERICK',	'FABRIZIO',	'FIORELLA OBREGON',	'FIORELLA FIGARI',	'FRANK',	'GERALDINE',	'GIAN',	'GIOVANA',	'GIOVANNA',	'HANS',	'HELLEN',	'JOSE',	'JOSELYN',	'JULIANA',	'JULISSA',	'KATHERINE',	'KEITH',	'KELLY',	'KENNY',	'LEYDI',	'MARIA',	'MARIALENA',	'MARYCARMEN',	'MARYURI',	'MAURO',	'MILAGROS',	'NICOL',	'RENATO',	'TERESA',	'VILMA',	'VITE',	'WILDER',	'YESSICA',	'YHAMALI',	'ZUNNY'))







cnxn = mysql.connector.connect( host="10.226.120.172",
                                port="3306",
                                user="slinea",
                                passwd="OP81^K@u",
                                db="segunda_linea"
                                )
cursor = cnxn.cursor()

sql = """
SELECT * FROM bdtickets ;
"""
#######
## TODO BASE DE DATOS MYSQL
#######
df1 = pd.read_sql(sql, cnxn)
df1["codreq"]=df1["codreq"].astype(str)

st.dataframe(df1)

dat1 = 'locoo'
datow = 'INC000001379344'

sql = "UPDATE bdtickets SET desmotv = %s  WHERE codreq = %s"
val = (dat1, datow)
#print(lenCodigoclienteinp)
#print(rreeee)
cursor.execute(sql, val)
cnxn.commit()



## fondo total
def add_bg_from_url():
    st.markdown(
        f"""
        <style>
        .stApp {{
            background-image: url("https://cdn.pixabay.com/photo/2020/05/15/17/55/box-5174459_960_720.jpg 1x, https://cdn.pixabay.com/photo/2020/05/15/17/55/box-5174459_1280.jpg");
            background-attachment: fixed;
            background-size: cover
        }}
        </style>
        """,
        unsafe_allow_html=True
    )
add_bg_from_url()


## borrar nombres de la pagina
hide_streamlit_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            header {visibility: hidden;}
            </style>
            """
st.markdown(hide_streamlit_style, unsafe_allow_html=True)