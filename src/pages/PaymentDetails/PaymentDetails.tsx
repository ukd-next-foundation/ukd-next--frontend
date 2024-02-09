import cls from "./PaymentDetails.module.scss";
import ClipBoard from "../../components/ClipBoard/ClipBoard.tsx";
import {Link} from "react-router-dom";
// interface IPaymentDetails {}

const PaymentDetails = () => {
  return (
    <div className={cls.payment_container}>
      <header className={cls.payment_header}>
        <Link to={'/home/profile'}>
          <img src="/arrow_back.svg" alt="" />
        </Link>
        <h1>Реквізити</h1>
      </header>
      <main className={cls.payment_main}>
        <ul className="payment_list">
          <li className={cls.payment_item}>
            <h4>Банк отримувач</h4>
            <p>АТ “ПриватБанк”</p>
          </li>
          <li className={cls.payment_item}>
            <h4>Одержувач</h4>
            <p>Назва організації</p>
          </li>
          <li className={cls.payment_item}>
            <h4>Призначення платежу</h4>
            <p>
              Призначення коштів за договором №4655798454, ПДВ не оплачується
            </p>
          </li>
          <li className={cls.payment_item}>
            <h4>ІПН при необхідності</h4>
            <p>771014</p>
          </li>
          <li className={cls.payment_item}>
            <h4>КПП при необхідності</h4>
            <p>4655798454</p>
          </li>
          <li className={cls.payment_item}>
            <h4>Номер договору</h4>
            <ClipBoard value={"4655798454"}>
              <p>4655798454</p>
            </ClipBoard>
          </li>
          <li className={cls.payment_item}>
            <h4>Номер рахунку</h4>
            <ClipBoard value={"46534653423121654281"}>
              <p>46534653423121654281</p>
            </ClipBoard>
          </li>
          <li className={cls.payment_item}>
            <h4>БІК</h4>
            <ClipBoard value={"044532154"}>
              <p>044532154</p>
            </ClipBoard>
          </li>
          <li className={cls.payment_item}>
            <h4>Кор. рахунок</h4>
            <ClipBoard value={"301054651265546531"}>
              <p>301054651265546531</p>
            </ClipBoard>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default PaymentDetails;
