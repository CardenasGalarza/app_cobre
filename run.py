import os
import sys
import streamlit.web.cli as stcli
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
import warnings
warnings.filterwarnings('ignore')
#####3333
##########################
import time
from datetime import datetime
import mysql.connector


if __name__ == '__main__':

    launchdir = os.path.dirname(sys.argv[0])

    #if launchdir == '':
    #    launchdir = '.'

    print(launchdir)
    #sys.argv = ["streamlit", "run", f"{launchdir}/app.py", "--server.port=10000", "--server.headless=true", "--global.developmentMode=false"]
    sys.argv = ["streamlit", "run", "https://raw.githubusercontent.com/CardenasGalarza/app_cobre/main/app.py", "--server.port=10000", "--server.headless=true", "--global.developmentMode=false"]
    #sys.argv = ["streamlit", "run", f"{launchdir}/app.py", "--global.developmentMode=false"]
    sys.exit(stcli.main())


