import { Image } from "antd"
import "./scss/algorithmPageStyle.scss"
import map_01 from "./assets/img/解說/map_01.png"
import map_02 from "./assets/img/解說/map_02.png"
import hash_01 from "./assets/img/解說/hash_01.png"
import hash_table_lookup from "./assets/img/圖解/hash_table_lookup.png"
import leetcode01 from "./assets/img/Leetcode/leetcode01.png"
import leetcode217 from "./assets/img/Leetcode/leetcode217.png"
import leetcode349 from "./assets/img/Leetcode/leetcode349.png"
import leetcode1207 from "./assets/img/Leetcode/leetcode1207.png"
import newMap找數組 from "./assets/img/解說/newMap找數組.png"
import leetcode03 from "./assets/img/Leetcode/leetcode03.png"


const Dictionary_Hash: React.FC = () => {

    // var a = {}
    // var b = { key: 'a'}
    // var c = { key: 'c'}
    // a[b] = '123';  // => a[[object Object]] = '123'
    // a[c] = '456';  // => a[[object Object]] = '456'

    // console.log( a ) // {[obj]:'456'}
    
    // console.log( a[b] );  //456

    // let obj = {
    //     'a':1,
    //     'a':2
    // }
    // console.log( obj ); //{ a:2 }

    //設置
    // let map = new Map()

    // map.set('a','1');
    // map.set('b','2');

    // console.log( map )
    // //獲取
    // console.log( map.get('b') )
    // //檢測有沒有b返回 true /false
    // console.log( map.has('b') ) //true
    // //刪除
    // map.delete('a');
    // console.log( map );

    // var a = new Map();
    // var b = { key:'a' }
    // var c = { key:'c' }

    // a.set( b,'123');
    // a.set( c,'456');

    // console.log( a, a.get(b) , a.get(c) )

    // class HashTable{   
    //     constructor(){
    //         this.table = [];
    //     }
    //     hashCode( key ) {
    //         for(let i = 0; i<key.lengtj; i++) {
    //             hash += key.charCodeAt(i);
    //         }
    //         return hash;
    //     }
    //     put( key , val) {
    //         let hashKey = this.hashCode(key);
    //         this.table[ hashKey ] = val;
    //     }
    //     get( key ){
    //         let hashKey = this.hashCode(key);
    //         return this.table[ hashKey ]

    //     }
    // }

    // class HashTable {
    //     private table: (string | number | undefined)[];
    
    //     constructor() {
    //         this.table = [];
    //     }
    
    //     private hashCode(key: string): number {
    //         let hash = 0;
    //         for (let i = 0; i < key.length; i++) {
    //             hash += key.charCodeAt(i);
    //         }
    //         return hash;
    //     }
    
    //     public put(key: string, val: string | number): void {
    //         const hashKey = this.hashCode(key);
    //         this.table[hashKey] = val;
    //     }
    
    //     public get(key: string): string | number | undefined {
    //         const hashKey = this.hashCode(key);
    //         return this.table[hashKey];
    //     }
    // }
    

    // let hashTable = new HashTable();
    // hashTable.put('person','小魚');
    // console.log (hashTable)
    // console.log( hashTable.get('person'));

    //aaabbbbcccccc找出誰出現最多

    // function fun( s: string ) {
    //     let maxNum = 0;
    //     let maxStr = '';
    //     let map = new Map();
    //     for( let item of s) {
    //          map.set( item, (map.get(item) || 0) +1)
    //     }
    //     console.log(map)

    //     for(let [key,value] of map) {
    //         if(value > maxNum) {
    //             maxStr = key;
    //             maxNum = value;
    //         }
    //     }
    //     console.log( maxStr , maxNum)
    // }

    // console.log( fun('aaabbbbcccccc'))
   
    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                字典與哈希表
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                {/* 介紹字典 */}
                <div>
                    <p>
                        什麼是字典
                    </p>
                    <p>
                        字典:鍵值對存儲的,類似於js的對象(鍵[key]都是字符串類型),或者轉換為字符串類型<br />
                        字典 ==》map來表示的,map的鍵不會轉換類型<br />
   
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={map_01} alt="map_01" style={{display:"none"}}/>
                                <Image src={map_02} alt="map_02" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                </div>
                <div className="diagrambox">
                    <p>
                        哈希表(湊雜表)
                    </p>
                    <p>
                        又稱為散列表<br />
                        區別1: 如果找key對應的value需要遍歷key,如果想省去遍歷的過程,用哈希表來表示。<br />
                        區別2: 排列順序,字典是根據添加順序進行排列,哈希表則不是
                        <br />
                        在js中沒有哈希表,哈希表是字典一種實現
                        
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={hash_table_lookup} alt="哈希表" />
                                <Image src={hash_01} alt="hash_01" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>


            </div>
            <br />
            <div className="Detailed_introduction">
                {/*Leetcode第1題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/two-sum/description/" >Leetcode第1題</a>
                    </p>
                    <p>
                        <Image src={leetcode01} alt="leetcode01"/>
                    </p>
                </div>
                {/*Leetcode第217題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/contains-duplicate/description/" >Leetcode第217題</a>
                    </p>
                    <p>
                        <Image src={leetcode217} alt="leetcode217"/>
                    </p>
                </div>
                 {/*Leetcode第349題*/}
                 <div>
                    <p>
                        <a href="https://leetcode.com/problems/intersection-of-two-arrays/" >Leetcode第349題</a>
                    </p>
                    <p>
                        <Image src={leetcode349} alt="leetcode349"/>
                    </p>
                </div>
                  {/*Leetcode第1207題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/unique-number-of-occurrences/" >Leetcode第1207題</a>
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={leetcode1207} alt="leetcode1027"/>
                                <Image src={newMap找數組} alt="newMap找數組" style={{display:"none"}}/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/*Leetcode第3題*/}
                <div>
                    <p>
                        <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" >Leetcode第3題</a>
                    </p>
                    <p>
                        <Image src={leetcode03} alt="leetcode03"/>
                    </p>
                </div>
                


            </div>

        </div>
    )
}

export default Dictionary_Hash 