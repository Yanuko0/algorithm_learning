import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Image_Recognition: React.FC = () => {

    return (
        <div className="full_page">
            {/* 標題 */}
            <div className="title">
                圖像識別&自然語言處理
            </div>
            {/* 基本介紹 */}
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                        如何讓機器看懂世界
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_img_recognition} alt="ai_img_recognition" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        圖像識別是讓機器看懂世界的一種能力, 也被稱為計算機視覺。 圖像識別技術的目的是使計算機能夠理解和分析圖像, 並根據圖像的內容進行分類、識別和標記。
                    </p>
                    <p>
                        圖像識別技術在許多應用都有重要作用, 如自動駕駛汽車、只能監控、人臉辨識、醫學圖像識別等。圖像識別的背後是深度學習和卷積神經網路(CNN)這些先進的人工智能技術。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_CNN} alt="ai_CNN" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        CNN是一種專門用於處理圖像的神經網路結構, 它可以從輸入的數字圖像中提取出圖像的特徵。具體來說, CNN通過多次卷積運算和池化運算來對圖像進行處理, 從而識別圖像的不同部分。 卷積運算可以提取出圖像中的局部特徵, 池化運算可以將圖像的分辨率降低, 減少計算量和內存占用。
                    </p>
                    <p>
                        在CNN中, 還會使用一些激活函數、損失函數和優化算法等技術來提高圖像識別的標準性和效率。
                        <li>激活函數激活函數用於在神經網路中引入非線性</li>
                        <li>損失函數用於度量神經網路的預測結果與真實結果之間的差異</li>
                        <li>優化算法用於調整神經網路的參數, 以提高預測準確性</li>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_CNN_01} alt="ai_CNN_01" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        當一個CNN模型經過訓練之後, 它就可以對新的數字圖像進行分類和識別。 具體來說,當一個數自圖像被輸入到CNN模型當中時, 模型會通過多次卷積和池化運算提取出圖像的特徵, 並將這些特徵輸入到全連階層中進行分類。 最終, 模型會輸出一個概率分布, 表示該圖像屬於不同類別的概率大小。
                    </p>

                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.ai_CNN_02} alt="ai_CNN_02" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        總的來說, 圖像識別背後的祕密是通過使用深度學習和CNN這些先進的人工智能技術,讓機器學會從數字圖像中提取特徵, 並且將這些特徵用於分類與識別。
                    </p>



                </div>
                {/* 自然語言處理 */}
                <div>
                    <p>
                        自然語言處理
                    </p>
                    <p>
                        又稱為NLP, 是一種人工智能技術, 它可以讓機器能夠理解和處理自然語言, 也就是人們日常生活中使用的語言。
                        <br />
                        在NLP中, 機器需要經過多個步驟來理解自然語言。 這些步驟包括文本分詞、詞性標註、命名實體識別、句法分析、語意分析等。
                        <br />
                        下面簡單介紹這些步驟的含意與作用
                        <ul>
                            <li>文本分詞:將一段文本分割成若干個詞語或符號, 也就是對文本進行分詞。 分詞是NLP的基礎工作, 因為自然語言中的句子是由一個個詞語組成的, 只有將句子分成單獨的詞語, 機器才能理解含意。</li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_01} alt="NLP_01" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <ul>
                            <li>
                                詞性標註:給每一個詞語標註其詞性。詞性標註的作用是幫助機器理解每個詞語在句子中的作用, 從而更好的理解句子的涵義
                            </li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_02} alt="NLP_02" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <ul>
                            <li>
                                命名實體識別: 識別出文本中的人名、地名、組織機構等命名實體。命名實體識別的作用是讓機器能夠識別出文本中的重要信息, 從而更好地理解文本的含意。
                            </li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_03} alt="NLP_03" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <ul>
                            <li>
                                句法分析: 分析句子中各個成本之間的關係。句法分析的作用是幫助機器理解句子的結構, 從而更好的理解句子的含意。
                            </li>
                        </ul>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_04} alt="NLP_04" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <ul>
                            <li>
                                語意分析: 分析句子的語意, 即句子的意思。 語意分析的作用是讓機器能夠理解句子的真正含意, 從而更好的處理和回答用戶的問題。
                            </li>
                        </ul>
                    </p>
                    <p>
                        除了上述的文本分詞、詞性標註、命名實體識別、句法分析和語意分析等步驟外, 自然語言處理還包括以下重要的技術與應用
                    </p>
                    <br />
                    <p>
                        <li>文本分類: 將文本分為不同的類別。 例如, 對新聞文章進行分類, 可以將其分為政治、體育、財經等類別。</li>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_05} alt="NLP_05" />


                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <li>文本聚類: 將文本按照相似性進行分組。例如, 將新聞文章按照主題進行聚類,可以將所有與體育有關的文章放在一起。
                        </li>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_06} alt="NLP_06" />
                                {/* <Image src={time_complexity_02} alt="time_complexity_02" style={{ display: "none" }} /> */}

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <br />
                    <p>
                        <li>情感分析: 分析文本中的情感傾向, 例如正面、中性或負面情感。 情感分析可以用於監測社交媒體上與情或評估產品或服務的用戶體驗</li>
                      
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_07} alt="NLP_07" />
                            </Image.PreviewGroup>
                        </div>
                    </p>

                    <br />
                    <p>
                        <li>文本摘要: 將長篇文本壓縮成簡短的摘要。 文本摘要可以用於自動化撰寫新聞報導或減化用戶手冊等。</li>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_08} alt="NLP_08" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <li>機器翻譯: 將一種語言翻譯成另一種語言。 機器翻譯是自然語言處理重要的應用之一, 可以用於跨語言交流和全球化業務</li>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_09} alt="NLP_09" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        <li>智能問答: 根據用戶提出的問題, 自動回答相關問題。 智能回答是自然語言處理的應用之一, 可以用於幫助用戶解決問題或提供信息。</li>
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.NLP_10} alt="NLP_10" />
                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        總的來說, 自然語言處理是一種非常廣泛應用人工智能技術, 它可以幫助機器人理解自然語言, 從而實現各種應用, 例如機器翻譯、智能客服、 智能問答等。
                    </p>

                </div>
                <div>
                    <p>背後的技術</p>
                </div>
            </div>
            {/*背後的技術*/}
            <div className="Detailed_introduction">
                {/* RNN循環神經網路 */}
                <div>
                    <p>
                        RNN循環神經網路
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.RNN} alt="leetcode215"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div> 
                {/* LSTM長短時記憶      */}
                <div>
                    <p>
                        LSTM長短時記憶
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.LSTM} alt="LSTM"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div> 
                {/* Seq25eq  */}
                <div>
                    <p>
                        Seq25eq
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Seq25eq} alt="Seq25eq"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div> 
            </div>
            <div className="Detailed_introduction">
                 {/* Attention注意力機制   */}
                 <div>
                    <p>
                        Attention注意力機制
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Attention} alt="Attention"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* Transformer */}
                <div>
                    <p>
                    Transformer
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.Transformer} alt="Attention"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div>
                {/* Bert GPT */}
                <div>
                    <p>
                        Bert GPT
                    </p>
                    <p>
                    <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.BertGPT} alt="leetcode215"/>
                            </Image.PreviewGroup>
                        </div>
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default Image_Recognition