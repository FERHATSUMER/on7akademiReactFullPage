import React from 'react'
import "./exams.css"
const Exams = () => {
  return (
    <div className="examsContainer">
    <div className="examsCardContainer">
      <div className="examsCard">
        <img
          src="https://media.istockphoto.com/id/1219382595/tr/vekt%C3%B6r/bir-tahtaya-yaz%C4%B1lan-matematik-denklemleri.jpg?s=612x612&w=0&k=20&c=KdDQ4aB9JdCGG-OBBB-9ESv3XuvcF5ZPiIgjCGA6YIc="
          alt="resim"
          className="examsPhoto"
        />
        <div className="examsNitro">
          <h1 className="examsh1">Matematik</h1>
          <h3 className="examsh3">Öğretmen Adı</h3>
          <h4 className="examsh4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
            cumque iure eaque culpa accusamus magnam autem incidunt aut
            aspernatur! Nihil eius recusandae voluptas nam fugiat similique
            facilis fuga et!
          </h4>
          <div className="examsButtonContainer">
            <button className="examsButton">Sınava Gir</button>
            <button className="examsButton">Mazeret Bildir</button>
          </div>
        </div>
      </div>
      <div className="examsCard">
        <img
          src="https://letgenbio.com/wp-content/uploads/2021/06/tuik-ilk-kez-acikladi-turkiyede-biyoteknoloji4b-1024x682.jpg"
          alt="resim"
          className="examsPhoto"
        />
        <div className="examsNitro">
          <h1 className="examsh1">Biyoloji</h1>
          <h3 className="examsh3">Öğretmen Adı</h3>
          <h4 className="examsh4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
            cumque iure eaque culpa accusamus magnam autem incidunt aut
            aspernatur! Nihil eius recusandae voluptas nam fugiat similique
            facilis fuga et!
          </h4>
          <div className="examsButtonContainer">
            <button className="examsButton">Sınava Gir</button>
            <button className="examsButton">Mazeret Bildir</button>
          </div>
        </div>
      </div>
      <div className="examsCard">
        <img
          src="https://www.tech-worm.com/wp-content/uploads/2019/03/fatih-sultan-mehmet-fatih-unvanini-nasil-ve-ne-zaman-almistir.jpg"
          alt="resim"
          className="examsPhoto"
        />
        <div className="examsNitro">
          <h1 className="examsh1">Tarih</h1>
          <h3 className="examsh3">Öğretmen Adı</h3>
          <h4 className="examsh4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
            cumque iure eaque culpa accusamus magnam autem incidunt aut
            aspernatur! Nihil eius recusandae voluptas nam fugiat similique
            facilis fuga et!
          </h4>
          <div className="examsButtonContainer">
            <button className="examsButton">Sınava Gir</button>
            <button className="examsButton">Mazeret Bildir</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Exams
