/*
    Required Dependencies
    - readline
*/
console.log("started");

import readline from 'readline';

class ReadLineConsole {
  public rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  public input(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(prompt, (answer: string) => {
        resolve(answer);
      });
    });
  }

  public close(): void {
    this.rl.close();
  }
}
// Constants
const CurrVer: string = "1.98.69 release 1.57.312 beta 7352 test 1f part 1.0";
const p: string = "Input the number of your ";
const a: ReadLineConsole = new ReadLineConsole();
/* Constants: 
( P H P )
*/function substr(str:string,start:number,length?:number):string{if(length===undefined){return str.slice(start)}return str.slice(start,start+length)}function explode(delimiter:string,string:string):string[]{return string.split(delimiter)}function implode(glue:string,pieces:string[]):string{return pieces.join(glue)}function strlen(str:string):number{return str.length}function strpos(haystack:string,needle:string,offset:number=0):number{return haystack.indexOf(needle,offset)}function str_replace(search:string,replace:string,subject:string):string{return subject.replace(new RegExp(search,'g'),replace)}function is_numeric(value:any):boolean{return!isNaN(parseFloat(value))&&isFinite(value)}function array_push<T>(arr:T[],...elements:T[]):number{return arr.push(...elements)}function array_pop<T>(arr:T[]):T|undefined{return arr.pop()}function strtoupper(str:string):string{return str.toUpperCase()}function strtolower(str:string):string{return str.toLowerCase()}function trim(str:string):string{return str.trim()}function str_repeat(input:string,multiplier:number):string{return input.repeat(multiplier)}function in_array<T>(needle:T,haystack:T[]):boolean{return haystack.includes(needle)}function array_merge<T>(...arrays:T[][]):T[]{return([]as T[]).concat(...arrays)}function array_filter<T>(arr:T[],callback:(value:T)=>boolean):T[]{return arr.filter(callback)}function array_map<T, U>(arr:T[],callback:(value:T)=>U):U[]{return arr.map(callback)}function array_reduce<T, U>(arr:T[],callback:(accumulator:U,currentValue:T)=>U,initialValue:U):U{return arr.reduce(callback,initialValue)}function count<T>(arr:T[]):number{return arr.length}function is_array(value:any):boolean{return Array.isArray(value)}function date(format:string,timestamp?:number):string{const date=timestamp?new Date(timestamp*1000):new Date();return format.replace(/%[a-zA-Z]/g,(match)=>{switch(match){case'%Y':return date.getFullYear().toString();case'%m':return(date.getMonth()+1).toString().padStart(2,'0');case'%d':return date.getDate().toString().padStart(2,'0');case'%H':return date.getHours().toString().padStart(2,'0');case'%i':return date.getMinutes().toString().padStart(2,'0');case'%s':return date.getSeconds().toString().padStart(2,'0');default:return match}})}
/* PHP END */
function giveThumbsUp()
{
    console.log(`👍`);
    return;
}
async function askYNQuestion(Five: string): Promise<boolean>
{
    return (await a.input(`${Five} (Y / N)\n`)).toLowerCase().trim() === "y";
}
async function askQuestionQueryNum(mew: { [key: string ]: number }, XTAB: any[])
{    
    for (let two of XTAB)
    {
        const a_: number = parseFloat(await a.input(`${p}${two}\n`));
        mew[two] = is_numeric(a_) ? a_ : 1;    
    }
    giveThumbsUp();
    await a.input(`- Press enter to continue -`);
    clearConsole();
    return;
}
async function sleep(time: number)
{
    return await setTimeout(function(){}, time);
}
function clearConsole()
{
    for (let i = 0; i <= 256; i++)
        console.log(`\n`);
}
async function parseCellThingsIDoNotKnow(a: ReadLineConsole, i: { [key: string]: string[] }): Promise<{ [key: string]: number }> {
    const input = await a.input("Enter parts and quantities, example: Nouricyte: 69, Spikes: 39875, Electrocytes: 5 [IMPORTANT NOTE: To declare your preferred lance level, please use LanceLevel, for example: LanceLevel: 5]\n");
    let result: { [key: string]: number } = {};
    const aliasMap: { [key: string]: string } = {};

    for (const [originalName, aliases] of Object.entries(i)) {
      result[originalName] = 0;
      for (const alias of aliases) {
        aliasMap[strtolower(alias)] = originalName;
      }
      aliasMap[strtolower(originalName)] = originalName;
    }
  
    const parts: string[] = explode(',', input).map(part => trim(part)); // next what? php? nuclearbomb()? huhh??
    for (const part of parts) {
      const [name, quantity] = explode(':', part).map(item => trim(item));
      const lowercaseName: string = strtolower(name);
  
      if (aliasMap.hasOwnProperty(lowercaseName)) {
        const originalName: string = aliasMap[lowercaseName];
        const parsedQuantity: number = parseFloat(quantity);
  
        if (is_numeric(parsedQuantity)) {
          result[originalName] = Math.floor(parsedQuantity);
        }
      } else {
        console.log(`WARN: Cell ${lowercaseName} does not exist! I have no idea what this '${lowercaseName}' cell is.`);
      }
    }
    giveThumbsUp();
    return result;
  }
function formatNum(num: number): string {
    return Math.round(num).toString().padStart(2, '0');
}
async function main() {
  try
  {
  let d: { [key: string]: number } = {}; // table- i mean json of the stat things
  let h: { [key: string]: number } = {}; // nouri party

  let e: string[] = ["Food Per Minute", "Food Storage", "Passive XP", "Despawn Time"]; // questions part 1
  let g: string[] = ["Vivicytes", "Nouricytes", "Nearby People (Excluding yourself)"]; // questions part 2 (literally parts) {nouri and vivi party}
  let i: { [key: string]: string[] } = {"Spikes": ["Spike"], "Jaws": ["Jaw"], "Drills": ["Drill"], "Maces": ["Mace"], "Shooters": ["Shooter"], "Exotoxins": ["Exotoxin"], "Electrocytes": ["Electrolyte", "Electrolytes", "Electros", "Electro"], "Mandibles": ["Mandible"], "Medusas": ["Medusa"], "Lances": ["Lance"], "Vivicytes": ["Vivicyte", "Vivis", "Vivi"], "Nouricytes": ["Nouricyte", "Nouris", "Nouri"], "Armours": ["Armour", "Armors", "Armor"], "Movers": ["Mover"], "Cillias": ["Cillia", "Cilias", "Cilia"], "Brains": ["Brain"], "Feeders": ["Feeder"], "Parasites": ["Parasite", "Leech"], "Muscles": ["Muscle"], "Stomachs": ["Stomach"], "Shells": ["Shell"], "Beefs": ["Beef"], "Grazers": ["Grazer", "Graser"], "Webbers": ["Webber"], "Eyes": ["Eye"], "Radulas": ["Radula"], "Gills": ["Gill"], "Viscops": ["Viscop"], "Eyestalks": ["Eyestalk", "Sillie"], "Pheromones": ["Pheromone"], "Membranes": ["Membrane"], "Flagellums": ["Flagellum"], "Droppers": ["Dropper"], "Intestines": ["Intestine"], "Sonars": ["Sonar"], "Hydrofields": ["Hydrofield", "Hydro", "Hydrogen"], "Urchins": ["Urchin"], "Chameleons": ["Chameleon"], "Chromatophores": ["Chromatophore"], "Jets": ["Jet"], "Silklocks": ["Silklock", "Scalelock", "Silktouch"], "Lipids": ["Lipid"], "Builders": ["Builder", "Pillars", "Pillar"], "Mouths": ["Mouth"], "Hearts": ["Heart"], "Menders": ["Mender"], "Marrows": ["Marrow"], "Lymphs": ["Lymph", "Lympths", "Lympth"], "LanceLevels": ["LanceLevel"]}; // parts literally
  // welcoming thing idk
  clearConsole();
  console.log(`Welcome back to Evolve Calculator version ${CurrVer}!
This version makes it 100% impossible to get it on mobile fr fr
- Credits -
Thanks to AstroDEvolve for the original calculator!

Thanks to rufusdoggo for the Despawn Time idea!"
Thanks to naka_z for the Vivi-Nouricyte AFK Calculator idea!
Thanks to .a.tree. for the Vivi-Nouricyte DNA Calculator idea!
Thanks to .a.tree. for the DAROs Calculator idea as well!
Thanks to pagglewaggle for the Regen Calculator idea!
Thank astrocool for making these calculators! If any bugs are encountered feel free to send a dm
Thank YOU for using this calculator. More updates are coming.`);
    await a.input("- Press enter to continue -");
    clearConsole();
  console.log(`- Required Inputs -`);
  await askQuestionQueryNum(d, e);
  const isNouriFan: boolean = await askYNQuestion(`Calculate AFK Vivicyte / Nouricyte potential?`);
  let [healed, fed]: number[] = [-1, -1];
  let [tnouri, dnavn]: number[] = [-1, -1];
  if (isNouriFan) 
  {
        await askQuestionQueryNum(h, g);
        [healed, fed] = [(h[g[0]]) * (h[g[2]]) * 4, (h[g[1]]) * (h[g[2]]) * 2]; [tnouri, dnavn] = [(d[e[1]]) - fed, (fed * 8 + healed * 8) / 100];
  }
  
  // Format:
  let cellList: { [key: string]: number } = {};
  const wantsDaro: boolean = await askYNQuestion(`Calculate DPS, Appetite, Regen and Outheal?`);
  let [dpsregular, dpspierce, regen, roundedRegen, outheal, estfoodmin, estfstorage, estfood]: number[] = [0,0,0,0,0,0,0,0];
  if (wantsDaro) 
  {
    cellList = await parseCellThingsIDoNotKnow(a, i);
    clearConsole();
    console.log("⏳");
    await sleep(1);
    clearConsole();
    const cellListProxy = new Proxy(cellList, {
        get: function(target, prop, receiver) {
          if (typeof prop === 'string') {
            if (!(prop in i)) {
              console.log(`WARN: The script tried to access ${prop}, but ${prop} does not exist as a key in cellList, expect calculator errors. Please report if you want this fixed.`);
            }
          }
          return Reflect.get(target, prop, receiver);
        }
      });
    cellList = cellListProxy;
    dpsregular = (cellList.Spikes*1)+(cellList.Jaws*1)+(cellList.Drills*0.5)+(cellList.Maces*0.25)+((cellList.Shooters*3)-((2.5+0.5)*cellList.Shooters)/2)+((cellList.Exotoxins*0.5)-((3+2)*cellList.Exotoxins)/2)+((cellList.Electrocytes*0.5)-((17.5+2)*cellList.Electrocytes)/2)+(cellList.Mandibles*0.5)+(cellList.Lances*(cellList.LanceLevels*(1-10)));
    dpspierce = (cellList.Drills*0.5)+((cellList.Exotoxins*0.5)-((3+2)*cellList.Exotoxins)/2)+((cellList.Electrocytes*0.5)-((17.5+2)*cellList.Electrocytes)/2);
    regen = 25/(1+(cellList.Menders*0.5)+(cellList.Lymphs*0.5)+(cellList.Marrows*1.5)+(cellList.Hearts*3.5));
    roundedRegen = Math.round(regen);
    outheal = 1 / regen;
    estfoodmin = (cellList.Armours*1)+(cellList.Spikes*1)+(cellList.Movers*2)+(cellList.Cillias*0.5)+(cellList.Mouths*0.5)+(cellList.Brains*2)+(cellList.Menders*1)+(cellList.Parasites*1)+(cellList.Muscles*2)+(cellList.Marrows*1)+(cellList.Stomachs*-0.5)+(cellList.Shells*0.25)+(cellList.Beefs*1)+(cellList.Grazers*1)+(cellList.Webbers*1)+(cellList.Jaws*1)+(cellList.Shooters*1)+(cellList.Eyes*1)+(cellList.Radulas*1)+(cellList.Gills*0.25)+(cellList.Viscops*1)+(cellList.Eyestalks*1)+(cellList.Pheromones*1)+(cellList.Feeders*-1)+(cellList.Membranes*0.5)+(cellList.Maces*1)+(cellList.Flagellums*2)+(cellList.Mandibles*2)+(cellList.Droppers*-1)+(cellList.Builders*1)+(cellList.Intestines*-3.75)+(cellList.Sonars*1)+(cellList.Hydrofields*3)+(cellList.Urchins*1)+(cellList.Chameleons*1.25)+(cellList.Chromatophores*1)+(cellList.Jets*2)+(cellList.Nouricytes*3)+(cellList.Vivicytes*3)+(cellList.Hearts*4)+(cellList.Electrocytes*3)+(cellList.Silklocks*1)+(cellList.Exotoxins*1.75)+(cellList.Medusas*1)+(cellList.Lances*1);
    estfstorage = ((cellList.Stomachs*7)+(cellList.Lipids*1)+(cellList.Droppers*5)+(cellList.Feeders*2)) + 3; // +3 for default storage
    estfood = estfoodmin * estfstorage;
  }
  const food: number = 60 / (d[e[0]]);
  const seconds: number = (d[e[1]])*food;
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const dnagain: number = (seconds/10)*(d[e[2]])/100;
  let cache: number = Math.round((d[e[3]])/food);
  const precisedespawn: string = String((cache > (d[e[1]])) ? "Creature will reach -1 food before despawn" : cache);
  console.log(`- RESULTS -
`);
  console.log(`- Afk -
    Afk Time: ${formatNum(hours)}:${formatNum(minutes)}:${formatNum(seconds % 60)} | Hour : Minute : Second
    Afk DNA Gain: ${dnagain}`);
  if (isNouriFan) console.log(`    - Afk Support -
        Amount Healed: ${healed}
        Amount Fed: ${fed}
        Target Feed Amount: ${tnouri}
        Possible DNA in One Go: ${dnavn}
`);
  console.log(`
When to despawn in food without eating: ${precisedespawn} food storage`);
  if (wantsDaro) console.log(`
- DPS, Appetite, Regen and Outheal | DARO -
    Damage Per Second | Regular: ${dpsregular}
    Damage | Piercing / Non-Physical: ${dpspierce}
    - Food -
        Estimated Food Per Minute: ${estfoodmin}
        Estimated Food Storage: ${estfood}
    - Regen
        Seconds Per Heal | Rounded [In Game Display]: ${roundedRegen}
        Seconds Per Heal | Precise: ${regen}
        Outheal | Amount of DPS you can outheal: ${outheal}

Thank you for using astrocool's calculator, but in TypeScript, also being easier to use!
Please forward all bugs to astrocool

also btw should we make Discord version
`);
  // EXIT
  await a.input(`- Press enter to exit -`);
  } catch (err) {
    console.log(`Sorry! It seems that an extremely rare error occurance has occured! Error : ${err}`);
  }
  a?.close();
  return;
}

main();
