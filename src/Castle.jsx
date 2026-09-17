import './castle.css'
import castleImg from './assets/castle.png'
import labImg from './assets/lab.jpg'
import witcherImg from './assets/witcher.jpg'
function Castle (){
    return (
        <>
            <section id="about">
                <h2>Kaer Morhen</h2>
                <div className="story">
                    <img src={castleImg}  alt="castle" />
                    <p>Kaer Morhen is an ancient mountain fortress from The Witcher fantasy universe created by Andrzej Sapkowski. For centuries, it served as the headquarters and training academy for the witchers of the School of the Wolf. The name comes from the Elder Speech (Caer a'Muirehen), which translates to "Keep of the Elder Sea," as the stones used to build its walls contain fossilized sea shells from a prehistoric ocean.The castle is hidden deep within the Blue Mountains on the outskirts of the kingdom of Kaedwen, near the Gwenllech river.</p>
                    <h3>History & Timeline</h3>
                    <ul>
                        <li><strong>Founding:</strong> The exact origins of the fortress remain a mystery. Centuries before the books' timeline, it became a sanctuary for renegade mages and the very first witchers. Here, using alchemy, mutagenic elixirs, and magic, young boys were subjected to the brutal Trial of the Grasses to turn them into mutant monster hunters.</li>
                        <li><strong>The Golden Age:</strong> During its peak, the fortress housed dozens of witchers, advanced alchemical laboratories, and a famous obstacle course called "The Gauntlet" where mentors like Vesemir trained future swordmasters, including Geralt of Rivia.</li>
                        <li><strong>The Massacre:</strong> In the late 12th century, fanatic mobs led by mages—fueled by anti-witcher propaganda like the pamphlet Monstrum, or a Description of the Witcher—stormed the castle. The assault was devastating: most of the mages, instructors, and children were slaughtered. The alchemical secrets to creating new witchers were lost forever, and the ruins became a graveyard.</li>
                        <li><strong>Decline & Current State:</strong> Following the massacre, Kaer Morhen fell into ruin. With no surviving mages who knew the secrets of the mutations, the creation of new witchers ceased completely. In the timeline of the books and games, it serves only as a winter refuge for the few remaining Wolf School witchers (Geralt, Vesemir, Eskel, and Lambert) to rest, heal, and make basic repairs to the crumbling walls.</li>
                    </ul>
                </div>
                <div className="trial">
                    <img src={labImg}  alt="lab" />
                    <p>The Trial of the Grasses is a deadly alchemical and magical mutation process that young boys underwent at Kaer Morhen to become witchers.</p>
                    <h3>Key Facts</h3>
                    <ul>
                        <li><strong>The Process:</strong> Children aged 7–10 were injected with toxic mutagens, elixirs, and viruses over a period of 7 to 9 days while under magical supervision.</li>
                        <li><strong>Mortality Rate:</strong> The procedure was so brutal that only 3 or 4 out of 10 children survived. The rest died from pain, shock, or organ failure.</li>
                        <li><strong>The Results:</strong> Survivors gained cat-like eyes (night vision), superhuman reflexes, immunity to diseases/poisons, and a heavily slowed aging process.</li>
                        <li><strong>The Cost:</strong> The mutations left all witchers completely sterile and caused permanent changes to their emotional spectrum.</li>
                    </ul>
                </div>
                <div className="witcher">
                    <img src={witcherImg}  alt="witcher" />
                    <p>Witchers (in Elder Speech: Vatt’ghern) are genetically modified mutant humans who were taken as children, rigorously trained, and subjected to deadly mutations to become professional monster hunters for hire. They are the central figures of The Witcher universe created by Andrzej Sapkowski.</p>
                    <h3>Key Characteristics of a Witcher</h3>
                    <ul>
                        <li><strong>The Transformation:</strong> Ordinary young boys were turned into witchers through grueling physical training and lethal chemical mutations, most notably the Trial of the Grasses.</li>
                        <li><strong>Superhuman Abilities:</strong> They possess cat-like eyes (allowing them to see in the dark), superhuman speed, unmatched reflexes, accelerated healing, and complete immunity to human diseases and most poisons.</li>
                        <li><strong>Side Effects:</strong> The mutation process renders all witchers completely sterile. It also alters or dampens their emotional spectrum, though they do not lose their emotions entirely, contrary to common belief.</li>
                        <li><strong>Extended Lifespan:</strong> They age at a fraction of the rate of normal humans and can live for centuries. For instance, Vesemir was older than the fortress of Kaer Morhen itself.</li>
                    </ul>
                    <h3>Gear and Combat Skills</h3>
                    <ul>
                        <li><strong>The Twin Swords:</strong> A witcher always carries two swords on their back. The steel sword is used against humans and ordinary animals, while the silver sword is reserved for magical creatures and monsters.</li>
                        <li><strong>Witcher Signs:</strong> They utilize a basic, practical form of combat magic that requires only simple hand gestures. The most common are Aard (a kinetic telekinetic wave), Igni (a burst of fire), and Quen (a protective magical shield).</li>
                        <li><strong>Alchemical Elixirs:</strong> Before a battle, they drink highly toxic witcher potions to temporarily boost their strength, vision, and speed. These potions are deadly poison to normal humans.</li>
                        <li><strong>The Medallion:</strong> A magical silver medallion shaped like the head of a beast (representing their specific school) that vibrates to warn them of nearby magic or approaching monsters.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default Castle