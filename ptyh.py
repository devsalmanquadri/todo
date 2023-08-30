####################################
import webbrowser
import time
import os

#####################################
inpt = input("Enter Youtube URL: ")
inpt2 = input("Enter Refresh Rate (Seconds): ")
inpt3 = input("Enter your Default Browser: ")
#####################################


def OpenUrl():
    print("Viewed.")
    webbrowser.open(inpt)
    time.sleep(int(inpt2))
    OpenUrl()


OpenUrl()
