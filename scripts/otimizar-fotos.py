"""Gera as versões leves (WebP) das fotos usadas pelo site.

Para cada foto de public/images citada no código (src/ e index.html), cria ao lado:
  foto-800.webp   (800 px no lado maior: miniaturas e celular)
  foto-1600.webp  (1600 px no lado maior: tela cheia e computador)
O componente <Photo> (src/components/Photo.jsx) usa essas versões automaticamente,
e o JPG original continua como reserva para navegadores antigos.

Rode de novo sempre que entrar ou mudar uma foto:
  python3 scripts/otimizar-fotos.py
Precisa de Python 3 com Pillow (pip install Pillow).
"""
import os
import re
import sys

from PIL import Image, ImageOps

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LARGURAS = (800, 1600)
QUALIDADE = 78


def fotos_usadas():
    usadas = set()
    for pasta, arquivos in [(os.path.join(RAIZ, 'src'), None), (RAIZ, ['index.html'])]:
        for base, _, nomes in os.walk(pasta) if arquivos is None else [(pasta, None, arquivos)]:
            for nome in nomes:
                if not nome.endswith(('.js', '.jsx', '.html')):
                    continue
                texto = open(os.path.join(base, nome), encoding='utf-8').read()
                usadas.update(re.findall(r'/images/[\w./-]+?\.(?:jpe?g|png)', texto, re.I))
    return sorted(usadas)


def main():
    antes = depois = 0
    for caminho in fotos_usadas():
        origem = os.path.join(RAIZ, 'public', caminho.lstrip('/'))
        if not os.path.exists(origem):
            print('não encontrada:', caminho)
            continue
        imagem = ImageOps.exif_transpose(Image.open(origem)).convert('RGB')
        antes += os.path.getsize(origem)
        for largura in LARGURAS:
            copia = imagem.copy()
            copia.thumbnail((largura, largura), Image.LANCZOS)  # nunca aumenta
            destino = re.sub(r'\.(jpe?g|png)$', f'-{largura}.webp', origem, flags=re.I)
            copia.save(destino, 'WEBP', quality=QUALIDADE, method=6)
            if largura == 1600:
                depois += os.path.getsize(destino)
        print(f'{os.path.getsize(origem) // 1024:5d} KB -> {os.path.getsize(destino) // 1024:4d} KB  {caminho}')
    print(f'Total (original -> versão 1600): {antes / 1e6:.1f} MB -> {depois / 1e6:.1f} MB')


if __name__ == '__main__':
    sys.exit(main())
