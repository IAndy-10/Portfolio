const spanishPoem = `Para sanarte vine, me habló
el Árbol sagrado
Ve y recoge mis hojas, mis
semillas, me está diciendo
De todas partes vinieron
tus buenas Machi
mis buenos Machi
desde las cuatro Tierras,
desde las cuatro aguas
mediaremos, me están diciendo
sus poderes
en tus nervios, en tus huesos
en tus venas
¿O deseas acaso abandonar
a nuestra gente?
Elevaré mis rogativas, le digo
Ay, mis pensamientos se apartaron
de los apacibles ríos
de mi corazón:
Piedra Transparente será éste
por mí, dijiste
¡Oh! Genechen, envíame tu aliento
tu resollar de aire poderoso
Éste va a ser cantor, dijiste
entregándome el caballo Azul
de la palabra
Hasta la Tierra de Arriba llegará
en sus Sueños
confundiendo al mensajero de
sus enemigos
Me oirá cuando hable desde
la savia de las plantas
y de las flores. Así dijiste
Más yo quise olvidar el consejo
de las Ancianas
y de los Ancianos
por eso estoy enfermo ahora
Mis pensamientos se alejaron
de los apacibles Ríos
de tu Corazón

Mírame, estoy soñando que he
subido por tus hojas
La Cascada Azul de la mañana
vino a mojar mis labios
con sus aguas
Subí, subí con ellas, pero
me sujetó el murmullo
de los peces
Caminé luego sobre el aroma
de los bosques
Después bailé. En él estaba
colgado mi poder
Las buenas Visiones y los buenos
Sueños lo rodeaban
Lloré entonces, lloré, abrazado
por el espíritu de mi Canelo.`;

const englishPoem = `"To heal you I came," it spoke,
the Sacred Tree.
"Go, gather my leaves,
my seeds," it is saying to me.

From every place they came,
your good Machi,
my good Machi,
from the Four Lands,
from the Four Waters.
"We shall mediate," they are saying,
"our powers
through your nerves,
your bones,
your veins.

Or do you wish, perhaps,
to abandon our people?"

"I will lift my prayers," I tell it.
Ah—my thoughts have strayed
from the peaceful rivers
of my heart.

"This shall be a Transparent Stone
through me," you said.
Oh, Genechen, send me your breath,
your deep and mighty wind.

"This one will be a singer," you said,
placing in my hands
the Blue Horse of the Word.
To the Upper Land it shall travel
in its Dreams,
confusing the messenger
of its enemies.

It will hear me when I speak
from the sap of plants
and of flowers—so you said.

But I wished to forget
the counsel of the Elders,
of the Wise Women and Men.
That is why I am ill now—
my thoughts have wandered
far from the peaceful Rivers
of your Heart.

Look at me—
I am dreaming that I have climbed
through your leaves.
The Blue Waterfall of morning
came to wet my lips
with its waters.

I rose, I rose with them,
but the murmur of the fish
held me back.

Then I walked upon the fragrance
of the forests.
Afterward I danced—
in it hung my power.
Good Visions and good Dreams
surrounded it.

Then I wept, I wept,
embraced
by the spirit of my Canelo.`;

export default function YoTerraPoem() {
  return (
    <>
      {/* Audio — The First Singing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">The First Singing</h2>
        <audio controls className="w-full">
          <source src="/First-Singing.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>

      {/* Poem */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary">Elicura Chihuailaf</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-secondary text-sm uppercase tracking-widest">Español</p>
            <p className="text-primary text-sm italic mb-4">Para sanarte vine, me habló el Canelo</p>
            <pre className="text-primary leading-relaxed font-sans whitespace-pre-wrap text-sm">{spanishPoem}</pre>
          </div>

          <div className="space-y-2">
            <p className="text-secondary text-sm uppercase tracking-widest">English</p>
            <p className="text-primary text-sm italic mb-4">To Heal You I Came, the Canelo Spoke to Me</p>
            <pre className="text-primary leading-relaxed font-sans whitespace-pre-wrap text-sm">{englishPoem}</pre>
          </div>
        </div>
      </section>
    </>
  );
}
