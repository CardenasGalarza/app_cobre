import streamlit as st
import warnings
warnings.filterwarnings('ignore')
#####3333
##########################
import time
from datetime import datetime
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

col1, col2, col3 = st.columns(3)

with col1:
    st.write("")

with col2:
    st.write("")
    st.write("")
    st.write("")

    st.write("")

with col3:
    st.write("")

page_names = ['SMS 7', 'SMS 8', 'SMS 9', 'SMS 10', 'SMS 11', 'SMS 12']
page = st.sidebar.radio('Selecciona inf. de mensaje💻',page_names, index=0)

if page == 'SMS 7':
    with st.form(key='my_form', clear_on_submit=True):
        import mysql.connector
        from mysql.connector import Error

        col1, col2, col3 = st.columns(3)

        with col1:
            celu = st.text_input('Celular')

        with col2:
            suscriptortelefono = st.text_input('suscriptortelefono')
        #with col2:
        #    option = st.selectbox(
        #        'How would you like to be contacted?',
        #        ('Email', 'Home phone', 'Mobile phone'))

        #    st.write('You selected:', option)




        #TODO SIVERVPARA BARRA AZUL

        st.balloons()
    # Every form must have a submit button.

        submitted = st.form_submit_button("✉️Enviar")

        if submitted == True:



            with st.spinner('Enviado mensaje...'):



                date = datetime.now()
                tiempo = (date.strftime("%d-%m-%Y %H:%M:%S"))


                st.markdown(f'<p class="big-font"; style="text-align:center;background-image: linear-gradient(to right,Cyan, Cyan);color:BLACK;font-size:16px;border-radius:2%;">Mensaje enviado</p>', unsafe_allow_html=True)
                #st.success('Mensaje enviado')
                st.balloons()
                #st.experimental_rerun()


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