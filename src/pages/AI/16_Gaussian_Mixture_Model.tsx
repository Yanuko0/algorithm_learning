
import "@/pages/Algorithm_learning/scss/algorithmPageStyle.scss"
import { Image } from "antd"
import ai_img from "@/pages/AI/assets/img/ai_img"

const Gaussian_Mixture_Model: React.FC = () => {

    return (
        <div className="full_page">
            {/* Gaussian_Mixture_Model */}
            <div className="title">
                高斯混和模型
            </div>
            <div className="introduce">
                <div className="diagrambox">
                    <p>
                         簡稱GMM
                    </p>
                    <p>
                        是一種常用的機器學習算法,用於對數據進行聚類或者擬合
                    </p>  
                    <p>
                        <li>對無標籤數據集,可以使用高斯混合模型進行聚類</li>
                    </p>                 
                    
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.GMM_01} alt="GMM_01" />

                            </Image.PreviewGroup>
                        </div>
                    </p>
                    <p>
                        假設你正在一個雜貨店裡,你看到一堆水果,有蘋果、香蕉和橙子。你想把他們分成幾組,以便更好地組織它們。GMM就像是一個聰明的小夥伴, 可以幫助你快速的將這些水果分成不同的組。
                        <li>首先, 我們將選擇一個初始的猜測, 假設有三個簇, 每個簇代表一種水果。然後, 我們將隨機選擇幾個數據點, 這些數據將被指定為每個簇的中心點。 在我們的例子中, 可能會選擇一些蘋果、香蕉、橙子做為中心點。</li>
                        <li>接下來, 我們將數據進行多次迭代(EM算法),美次迭代會根據每個中心點附近的數據點調整中心點的位置, 也便更好的擬合數據。 在這個過程中, 我們還會計算每個數據點屬於每個簇的概率。</li>
                        <li>最後, 當迭代完成時, 我們將得到一個最終的聚類結果, 其中每一個簇代表一種水果。這些簇的大小和位置將取決於初始猜測和迭代過程中的調整。
                        </li>
                    </p>        
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.GMM_02} alt="GMM_02" />

                            </Image.PreviewGroup>
                        </div>
                    </p>   
                    <p>
                        <li>對有標籤的數據進行, 也可以直接高斯混合模型進行分類</li>
                    </p>
                    <p>
                        讓我們假設你正在一個雜貨店裡,你看到三堆水果,有蘋果、香蕉、橙子。你想對他們三組水果分別建模, 以便未來閉眼隨手拿起一個水果, 不看也可以快速分類出哪一種。GMM就像是一個聰明的小夥伴, 可以幫助你快速將這些不同的水果進行建模, 未來當有新的水果近來時, 給出新的水果屬於不同類的似然。
                    </p>
                    <p className="diagram">
                        <div className="commentaryBox">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image src={ai_img.GMM_03} alt="GMM_03" />

                            </Image.PreviewGroup>
                        </div>
                    </p>              
                </div>
            </div>     
        </div>
    )
}

export default Gaussian_Mixture_Model