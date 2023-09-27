import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // @Input()
  newsPhoto:string="https://static.miraheze.org/mylittleponywiki/8/81/S9E26_Lyra_and_Bon_Bon_together_forever.png"
  // @Input()
  newsTitle:string="Lira e bombom: O pedido"
  // @Input()
  newsDescription:string=`Em um momento que deixou todos os fãs de My Little Pony emocionados, Lira e Bombom, dois adoráveis pôneis da série, protagonizaram um pedido de casamento incrivelmente fofo e inesquecível durante um episódio especial da série animada.
  
  A cena, que pegou todos de surpresa, aconteceu em um cenário idílico em Equestria, com o sol se pondo sobre as montanhas e os amigos pôneis reunidos para celebrar mais uma aventura emocionante. Enquanto o episódio se desenrolava, Bombom surpreendeu a todos quando, no meio de uma conversa sobre amizade, se ajoelhou diante de Lira e fez o pedido de casamento mais doce e emocionante que se possa imaginar.

  Lira, visivelmente emocionada, não conseguiu conter as lágrimas de alegria e alegremente aceitou o pedido, selando seu compromisso de amor eterno com Bombom. O episódio encerrou com os dois pôneis se abraçando em um momento de pura felicidade, enquanto os outros personagens aplaudiam e comemoravam o momento especial.

  O pedido de casamento de Lira e Bombom não apenas aqueceu os corações dos fãs de MLP, mas também serviu como um exemplo poderoso de amor e aceitação. A série sempre abraçou a diversidade e a importância da amizade, e esse episódio especial reforçou esses valores, mostrando que o amor verdadeiro não conhece limites.

  Os fãs de My Little Pony estão ansiosos para ver o casamento de Lira e Bombom e estão emocionados com a jornada desses personagens em busca de uma vida repleta de amor e aventuras em Equestria. Este episódio inesquecível certamente ficará marcado na história da série e continuará a inspirar gerações futuras.`
  constructor(){}
  ngOnInit(): void {

  }
}
