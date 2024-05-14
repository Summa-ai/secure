import os

import nmap
from colorama import Fore, Style, init


def clear():
    os.system("clear")

clear()

print("""
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⠦⡄⠀⠀⠀⠀⠀⠀⡴⠀⠀⠀
⠀⢀⣀⠀⠀⠀⣀⠤⠖⠒⠋⡉⠙⢲⣺⢅⡀⠀⠹⡀⠀⠀⠀⢀⡜⠁⠀⠀⠀
⣼⠉⠀⠉⠓⠏⠁⠀⠀⠀⠀⢯⣧⠈⢿⡆⠈⠓⢴⠇⠀⠀⣠⠊⠀⠀⠀⡀⠀
⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠀⡀⠄⠠⢀⠈⢣⡀⠀⠁⠀⢀⡤⠊⠀⠀
⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢀⠎⠀⠀⠀⠘⡇⠀⢧⠀⠐⠊⠁⠀⠀⠀        
⠀⢸⠳⣄⠀⠀⠀⠀⠀⠀⠀⠈⢺⠀⠀⠀⠀⠀⡇⠀⢸⠀⠀⠀⠀⢀⣀⣀⡀       By: Ahmed adlan
⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣆⠠⠄⢀⡀⢇⠀⢸⡀⠀⡀⠀⠀⠀⠀⠀       
⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢃⠀⠀⠀⠈⠙⠆⡼⠛⢦⡀⠑⠢⣄⠀⠀
⠀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡌⠢⣀⠀⢀⡴⡰⠁⠀⢀⡇⠀⠀⠈⠑⠀
⠀⠀⠀⢸⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠗⠒⠚⠉⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡜⠀⠉⠢⢄⣀⠀⠀⠀⠀⠀⣀⡤⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡇⠀⠀⠀⠀⣨⠟⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠙⠂⠴⠒⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
""")
input("")

clear()

init()

scanner = nmap.PortScanner()
scanner.scan(hosts='192.168.1.0/24', arguments='-p 554 --open')

camaras_encontradas = False
ip_analizadas = []
camaras_ip = []

for host in scanner.all_hosts():
    ip_analizadas.append(host)
    if scanner[host]['tcp'][554]['state'] == 'open':
        camaras_encontradas = True
        camaras_ip.append(Fore.CYAN + host + Style.RESET_ALL)

if not camaras_encontradas:
    print(Fore.GREEN + "No device found in you network" + Style.RESET_ALL)
    for iip in range(len(ip_analizadas)):
        print(ip_analizadas[iip])
else:
    f = open("ips.txt", "w")
    print("-------------------------------------------------")
    print("List of ips")
    for cip in camaras_ip:
        f.write(cip + "\n")
        print(Fore.RED + cip + Style.RESET_ALL)
    f.close()