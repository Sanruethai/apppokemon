import Image from 'next/image'; 
import styles from './page.module.css'; 
import img from './nn1.jpg';

export default function Page() {
  return (
    <section className={styles.main}>
      <div className={styles.row}>
        <div id="text-main" className={styles.textMain}>
          <h1 className={styles.about}>About Me</h1>
          <p className={styles.intro}>
            ฉัน ชื่อ นางสาวศานต์ฤทัย สายบุตร เป็นนักศึกษาในมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย กำลังเรียนอยู่ชั้นปี 3
          </p>  
          <p className={styles.description}>
            เกิดปี 2004 ตอนนี้กำลังเรียนอยู่ชั้นปี 3 สาขาเอกวิทยาการคอมพิมเตอร์และสารสนเทศ ชีวิตประจำวันชอบนอนดูหนัง ฟังเพลง ฉันเป็นคนร่าเริง ชอบออกไปเที่ยว
          </p>
        </div>

        <div id="img-main" className={styles.imgMain}>
          <Image 
            className={styles.sanruethai} 
            src={img}
            alt="Profile Image"
            width={450}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}