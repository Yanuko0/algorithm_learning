import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Getting_Started_AI: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                人工智能學習
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
            
                {/* 基本概念 */}
                <div>
                    <p>
                        基本概念
                    </p>
                    <p>

                        <li>了解人工智能基本概念</li><br />
                        首先先了解人工智能的基本概念和定義,人工智能是指通過計算機技術,實現類似於人類智能的能力,包括圖像識別、自然語言處理等多個方面,掌握基本概念有助於初學者理解人工智能的核心與技術。
                        <br /><br />
                        <li>學習編程語言</li><br />
                        人工智能技術離不開編成語言,因此初學者要掌握至少一門編成語言。Python是目前最流行的編成語言之一,也是人工智能領域中最常用的編成語言。只要掌握基本語法與編成思想就可以學了。
                        <br /><br />
                        <li>學習機器學習與深度學習</li><br />
                        機器學習與深度學習是人工智能領域中最核心的技術,機器學習是一種基於數據的方法, 通過讓機器從數據中學習模式和規律, 來完成預測和決策等任務。初學者可通過學習相關的課程掌握基本原理和方法。
                        <br /><br />
                        <li>學習使用相關的工具和框架</li><br />
                        在實際應用中,人工智能技術離不開相關的工具和框架,例如TensorFlow和PyTorch是目前最常用的深度學習框架, 初學者可以學習使用這些工具和框架來進行人工智能的實踐與應用。

                    </p>
                </div>
                {/* 暫時不講數據推導 */}
                <div>
                    <p>
                        暫時不講數據推導
                    </p>
                    <p>
                        入門時可以暫時不需要深入研究數據推倒,因為線在人工智能技術成熟, 提供了大量的高層次街口和工具, 使得開發人員可以快速夠建和部屬機器學習模型, 而無須對複雜的數學理論進行推導,就可以進行使用。
                        <br /><br />
                        例如TensorFlow和PyTorch這樣的深度學習框架提供了一些高層次的api,
                        這些api使得人們可以通過簡單的代碼構建深度學習模型, 而無須了解背後的數學理論。 此外,還有各種各樣的自動化機器學習工具和雲服務,可以幫助開發人員自動選擇模型和參數, 而無須對數據推倒有深入的了解。
                        <br /><br />
                        儘管如此, 對於深入理解和創新, 數學知識是必不可少的。當想要深入了解機器學習算法的運作原理、條是錯誤，優化算法等等, 數學推倒勢必需要了解的。因此, 雖然不用一開始就深入學習數據推倒, 但隨學習的深入, 要逐步掌握和理解數學知識是分常有益的。
                        <ul>
                            <li>統計學</li>
                            <li>微積分</li>
                            <li>優化算法</li>
                            <li>線性代數</li>
                        </ul>

                        例如, 在圖像分類中, 需要使用卷積神經網路(CNN)來處理圖像, 要了解CNN的工作原理, 需要了解卷積運算和池話運算, 這些運算都涉及到線性代數中的矩陣程法和微積分中的導數和偏導數。 此外,妳還需要了解積活函數、損失函數和優化算法等概念,這些概念同樣涉及到為積分和概率論的知識。
                        <br />
                        因此儘管可以使用現成的高層次API來構建圖像分類器, 但如果想要深入了解背後的原理, 需要學習一些數學知識。通過理解這些數學概念, 可以更好的理解積器學習算法和工作原理, 並且可以對算法進行優化和改進。
                    </p>
                </div>
                {/* 人工智能應用 */}
                <div>
                    <p>
                        人工智能應用
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_application} alt="ai_application" width={500} />
                                <Image src={ai_img.ai_language_processing} alt="ai_language_processing" style={{ display: "none" }} />
                                <Image src={ai_img.ai_Practical_application_01} alt="ai_Practical_application_01" style={{ display: "none" }} />
                                <Image src={ai_img.ai_Practical_application_02} alt="ai_Practical_application_02" style={{ display: "none" }} />
                                <Image src={ai_img.ai_Practical_application_03} alt="ai_Practical_application_03" style={{ display: "none" }} />
                                <Image src={ai_img.ai_Practical_application_04} alt="ai_Practical_application_04" style={{ display: "none" }} />
                                <Image src={ai_img.ai_Practical_application_05} alt="ai_Practical_application_05" style={{ display: "none" }} />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* 人工智能發展歷程 */}
                <div>
                    <p>
                        人工智能發展歷程
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_history} alt="ai_history" />
                                <Image src={ai_img.ai_deep_learning} alt="ai_deep_learning" />
                                <Image src={ai_img.ai_image_recognition} alt="ai_image_recognition" style={{ display: "none" }}/>
                    
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <ul>
                            <li>人工智能是指計算機模擬人類智能的一種技術</li>
                            <li>早期的AI主要是基於規則的專家系統, 難以應對複雜的任務與環境</li>
                            <li>隨著機器學習的興起,ai取的巨大的突破</li>
                        </ul>
                    </p>
                    <p>  
                        <li>圖靈測試</li>
                        計算機科學家阿蘭．圖靈為機器智能提出一個測試, 如果機器可以讓人認為它是一個人,那就算是具備智能了。
                        <br/><br/>
                        <li>專家系統</li>
                        是早期AI技術之一, 基於一系列的規則和知識庫進行推理和決策
                        專家系統的侷限性在於需要手動編寫規則與知識庫, 難以應對複雜的任務環境 
                        <br/><br/>
                        <li>機器學習</li>
                        讓計算機通過大量數據和算法來自動學習和改進,主要包括監督學習、無監督學習和強化學習,其應用包括圖像識別、自然語言處理、語音識別等領域。
                        <br/><br/>
                        <li>深度學習</li>
                        是機器學習的一種技術, 通過多層神經網路來提高學習能力和性能。深度學習的應用包括計算機視覺、自然語言處理、語音識別等領域。主要得益於計算能力的提升和數據量的增加
                        <br/><br/>

                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.segment_anything_Model} alt="segment_anything_Model" />
                                <Image src={ai_img.GTP} alt="GTP" />
                             
                    
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        GTP系列
                         <ul>
                            <li>基於Transformer架構的預訓練語言模型</li>
                            <li>學習自然語言的概率分布, 從而能夠生程具有語言連貫性的文本</li>
                            <li>GTP-3是當前最大、最先進的語言訓練模型之一(開源),具有驚人的語言生成能力和智能問答能力</li>
                         </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.chatGTP} alt="chatGTP" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                         ChatGTP
                         <ul>
                            <li>基於GTP系列的技術, 用於生成自然語言對話</li>
                            <li>通過學習大量對話數據和對話模式來模擬人類說話</li>
                         </ul>
                    </p>
                </div>


            </div>
           
        </div>
    )
}

export default Getting_Started_AI