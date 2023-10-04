import React from "react";
import "./PersonalDataProcessingPolicy.css";
import "../../index.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function PersonalDataProcessingPolicy() {
  return (
    <>
      <Header />
      <main className="main">
        <Navigation />
        <section className="personal-data-processing-policy">
          <div className="personal-data-processing-policy__container">
            <h2 className="personal-data-processing-policy__title section-title">
              Политика в отношении обработки персональных данных
            </h2>
            <ol className="personal-data-processing-policy__list">
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  1. Общие положения
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    Настоящая политика обработки персональных данных составлена
                    в соответствии с требованиями Федерального закона от
                    27.07.2006. № 152-ФЗ «О персональных данных» (далее — Закон
                    о персональных данных) и определяет порядок обработки
                    персональных данных и меры по обеспечению безопасности
                    персональных данных, предпринимаемые ООО "Триланд" (далее —
                    Оператор).
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    1.1. Оператор ставит своей важнейшей целью и условием
                    осуществления своей деятельности соблюдение прав и свобод
                    человека и гражданина при обработке его персональных данных,
                    в том числе защиты прав на неприкосновенность частной жизни,
                    личную и семейную тайну.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    1.2. Настоящая политика Оператора в отношении обработки
                    персональных данных (далее — Политика) применяется ко всей
                    информации, которую Оператор может получить о посетителях
                    веб-сайта{" "}
                    <a
                      className="personal-data-processing-policy__list-link"
                      href="https://triland.ru"
                    >
                      https://triland.ru
                    </a>
                    .
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  2. Основные понятия, используемые в Политике
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    2.1. Автоматизированная обработка персональных данных —
                    обработка персональных данных с помощью средств
                    вычислительной техники.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.2. Блокирование персональных данных — временное
                    прекращение обработки персональных данных (за исключением
                    случаев, если обработка необходима для уточнения
                    персональных данных).
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.3. Веб-сайт — совокупность графических и информационных
                    материалов, а также программ для ЭВМ и баз данных,
                    обеспечивающих их доступность в сети интернет по сетевому
                    адресу{" "}
                    <a
                      className="personal-data-processing-policy__list-link"
                      href="https://triland.ru"
                    >
                      https://triland.ru
                    </a>
                    .
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.4. Информационная система персональных данных —
                    совокупность содержащихся в базах данных персональных данных
                    и обеспечивающих их обработку информационных технологий и
                    технических средств.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.5. Обезличивание персональных данных — действия, в
                    результате которых невозможно определить без использования
                    дополнительной информации принадлежность персональных данных
                    конкретному Пользователю или иному субъекту персональных
                    данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.6. Обработка персональных данных — любое действие
                    (операция) или совокупность действий (операций), совершаемых
                    с использованием средств автоматизации или без использования
                    таких средств с персональными данными, включая сбор, запись,
                    систематизацию, накопление, хранение, уточнение (обновление,
                    изменение), извлечение, использование, передачу
                    (распространение, предоставление, доступ), обезличивание,
                    блокирование, удаление, уничтожение персональных данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.7. Оператор — государственный орган, муниципальный орган,
                    юридическое или физическое лицо, самостоятельно или
                    совместно с другими лицами организующие и/или осуществляющие
                    обработку персональных данных, а также определяющие цели
                    обработки персональных данных, состав персональных данных,
                    подлежащих обработке, действия (операции), совершаемые с
                    персональными данными.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.8. Персональные данные — любая информация, относящаяся
                    прямо или косвенно к определенному или определяемому
                    Пользователю веб-сайта{" "}
                    <a
                      className="personal-data-processing-policy__list-link"
                      href="https://triland.ru"
                    >
                      https://triland.ru
                    </a>
                    .
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.9. Персональные данные, разрешенные субъектом персональных
                    данных для распространения, — персональные данные, доступ
                    неограниченного круга лиц к которым предоставлен субъектом
                    персональных данных путем дачи согласия на обработку
                    персональных данных, разрешенных субъектом персональных
                    данных для распространения в порядке, предусмотренном
                    Законом о персональных данных (далее — персональные данные,
                    разрешенные для распространения).
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.10. Пользователь — любой посетитель веб-сайта{" "}
                    <a
                      className="personal-data-processing-policy__list-link"
                      href="https://triland.ru"
                    >
                      https://triland.ru
                    </a>
                    .
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.11. Предоставление персональных данных — действия,
                    направленные на раскрытие персональных данных определенному
                    лицу или определенному кругу лиц.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.12. Распространение персональных данных — любые действия,
                    направленные на раскрытие персональных данных
                    неопределенному кругу лиц (передача персональных данных) или
                    на ознакомление с персональными данными неограниченного
                    круга лиц, в том числе обнародование персональных данных в
                    средствах массовой информации, размещение в
                    информационно-телекоммуникационных сетях или предоставление
                    доступа к персональным данным каким-либо иным способом.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.13. Трансграничная передача персональных данных — передача
                    персональных данных на территорию иностранного государства
                    органу власти иностранного государства, иностранному
                    физическому или иностранному юридическому лицу.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    2.14. Уничтожение персональных данных — любые действия, в
                    результате которых персональные данные уничтожаются
                    безвозвратно с невозможностью дальнейшего восстановления
                    содержания персональных данных в информационной системе
                    персональных данных и/или уничтожаются материальные носители
                    персональных данных.
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  3. Основные права и обязанности Оператора
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    3.1. Оператор имеет право:
                    <ul className="personal-data-processing-policy__list-marked-subparagraphs">
                      <li className="personal-data-processing-policy__list-marked-item">
                        — получать от субъекта персональных данных достоверные
                        информацию и/или документы, содержащие персональные
                        данные;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — в случае отзыва субъектом персональных данных согласия
                        на обработку персональных данных, а также, направления
                        обращения с требованием о прекращении обработки
                        персональных данных, Оператор вправе продолжить
                        обработку персональных данных без согласия субъекта
                        персональных данных при наличии оснований, указанных в
                        Законе о персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — самостоятельно определять состав и перечень мер,
                        необходимых и достаточных для обеспечения выполнения
                        обязанностей, предусмотренных Законом о персональных
                        данных и принятыми в соответствии с ним нормативными
                        правовыми актами, если иное не предусмотрено Законом о
                        персональных данных или другими федеральными законами.
                      </li>
                    </ul>
                  </li>
                </ol>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    3.2. Оператор обязан:
                    <ul className="personal-data-processing-policy__list-marked-subparagraphs">
                      <li className="personal-data-processing-policy__list-marked-item">
                        — предоставлять субъекту персональных данных по его
                        просьбе информацию, касающуюся обработки его
                        персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — организовывать обработку персональных данных в
                        порядке, установленном действующим законодательством РФ;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — отвечать на обращения и запросы субъектов персональных
                        данных и их законных представителей в соответствии с
                        требованиями Закона о персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — сообщать в уполномоченный орган по защите прав
                        субъектов персональных данных по запросу этого органа
                        необходимую информацию в течение 10 дней с даты
                        получения такого запроса;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — публиковать или иным образом обеспечивать
                        неограниченный доступ к настоящей Политике в отношении
                        обработки персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — принимать правовые, организационные и технические меры
                        для защиты персональных данных от неправомерного или
                        случайного доступа к ним, уничтожения, изменения,
                        блокирования, копирования, предоставления,
                        распространения персональных данных, а также от иных
                        неправомерных действий в отношении персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — прекратить передачу (распространение, предоставление,
                        доступ) персональных данных, прекратить обработку и
                        уничтожить персональные данные в порядке и случаях,
                        предусмотренных Законом о персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — исполнять иные обязанности, предусмотренные Законом о
                        персональных данных.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  4. Основные права и обязанности субъектов персональных данных
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    4.1. Субъекты персональных данных имеют право:
                    <ul className="personal-data-processing-policy__list-marked-subparagraphs">
                      <li className="personal-data-processing-policy__list-marked-item">
                        — получать информацию, касающуюся обработки его
                        персональных данных, за исключением случаев,
                        предусмотренных федеральными законами. Сведения
                        предоставляются субъекту персональных данных Оператором
                        в доступной форме, и в них не должны содержаться
                        персональные данные, относящиеся к другим субъектам
                        персональных данных, за исключением случаев, когда
                        имеются законные основания для раскрытия таких
                        персональных данных. Перечень информации и порядок ее
                        получения установлен Законом о персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — требовать от оператора уточнения его персональных
                        данных, их блокирования или уничтожения в случае, если
                        персональные данные являются неполными, устаревшими,
                        неточными, незаконно полученными или не являются
                        необходимыми для заявленной цели обработки, а также
                        принимать предусмотренные законом меры по защите своих
                        прав;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — выдвигать условие предварительного согласия при
                        обработке персональных данных в целях продвижения на
                        рынке товаров, работ и услуг;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — на отзыв согласия на обработку персональных данных, а
                        также, на направление требования о прекращении обработки
                        персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — обжаловать в уполномоченный орган по защите прав
                        субъектов персональных данных или в судебном порядке
                        неправомерные действия или бездействие Оператора при
                        обработке его персональных данных;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — на осуществление иных прав, предусмотренных
                        законодательством РФ.
                      </li>
                    </ul>
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    4.2. Субъекты персональных данных обязаны:
                    <ul className="personal-data-processing-policy__list-marked-subparagraphs">
                      <li className="personal-data-processing-policy__list-marked-item">
                        — предоставлять Оператору достоверные данные о себе;
                      </li>
                      <li className="personal-data-processing-policy__list-marked-item">
                        — сообщать Оператору об уточнении (обновлении,
                        изменении) своих персональных данных.
                      </li>
                    </ul>
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    4.3. Лица, передавшие Оператору недостоверные сведения о
                    себе, либо сведения о другом субъекте персональных данных
                    без согласия последнего, несут ответственность в
                    соответствии с законодательством РФ.
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  5. Принципы обработки персональных данных
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    5.1. Обработка персональных данных осуществляется на
                    законной и справедливой основе.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    5.2. Обработка персональных данных ограничивается
                    достижением конкретных, заранее определенных и законных
                    целей. Не допускается обработка персональных данных,
                    несовместимая с целями сбора персональных данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    5.3. Не допускается объединение баз данных, содержащих
                    персональные данные, обработка которых осуществляется в
                    целях, несовместимых между собой.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    5.4. Обработке подлежат только персональные данные, которые
                    отвечают целям их обработки.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    5.5. Содержание и объем обрабатываемых персональных данных
                    соответствуют заявленным целям обработки. Не допускается
                    избыточность обрабатываемых персональных данных по отношению
                    к заявленным целям их обработки.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    5.6. При обработке персональных данных обеспечивается
                    точность персональных данных, их достаточность, а в
                    необходимых случаях и актуальность по отношению к целям
                    обработки персональных данных. Оператор принимает
                    необходимые меры и/или обеспечивает их принятие по удалению
                    или уточнению неполных, или неточных данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    5.7. Хранение персональных данных осуществляется в форме,
                    позволяющей определить субъекта персональных данных, не
                    дольше, чем этого требуют цели обработки персональных
                    данных, если срок хранения персональных данных не установлен
                    федеральным законом, договором, стороной которого,
                    выгодоприобретателем или поручителем, по которому является
                    субъект персональных данных. Обрабатываемые персональные
                    данные уничтожаются либо обезличиваются по достижении целей
                    обработки или в случае утраты необходимости в достижении
                    этих целей, если иное не предусмотрено федеральным законом.
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  6. Цели обработки персональных данных
                </h3>
                <table className="personal-data-processing-policy__table">
                  <tr className="personal-data-processing-policy__table-line">
                    <td
                      className="personal-data-processing-policy__table-text"
                    >
                      Цель обработки
                    </td>
                    <td className="personal-data-processing-policy__table-text">
                      Для осуществление обратного звонка и уточнения деталей
                      заказа, а также информирование Пользователя посредством
                      отправки электронных писем
                    </td>
                  </tr>
                  <tr className="personal-data-processing-policy__table-line">
                    <td
                      className="personal-data-processing-policy__table-text"
                    >
                      Персональные данные
                    </td>
                    <td className="personal-data-processing-policy__table-text">
                      фамилия, имя, отчество <br /> электронный адрес <br />{" "}
                      номера телефонов
                    </td>
                  </tr>
                  <tr className="personal-data-processing-policy__table-line">
                    <td
                      className="personal-data-processing-policy__table-text"
                    >
                      Правовые основания
                    </td>
                    <td className="personal-data-processing-policy__table-text">
                      Федеральный закон «Об информации, информационных
                      технологиях и о защите информации» от 27.07.2006 N 149-ФЗ
                    </td>
                  </tr>
                  <tr className="personal-data-processing-policy__table-line">
                    <td
                      className="personal-data-processing-policy__table-text"
                    >
                      Виды обработки персональных данных
                    </td>
                    <td className="personal-data-processing-policy__table-text">
                      Сбор, запись, систематизация, накопление, хранение,
                      уничтожение и обезличивание персональных данных <br />{" "}
                      Отправка информационных писем на адрес электронной почты
                    </td>
                  </tr>
                </table>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  7. Условия обработки персональных данных
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    7.1. Обработка персональных данных осуществляется с согласия
                    субъекта персональных данных на обработку его персональных
                    данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    7.2. Обработка персональных данных необходима для достижения
                    целей, предусмотренных международным договором Российской
                    Федерации или законом, для осуществления возложенных
                    законодательством Российской Федерации на оператора функций,
                    полномочий и обязанностей.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    7.3. Обработка персональных данных необходима для
                    осуществления правосудия, исполнения судебного акта, акта
                    другого органа или должностного лица, подлежащих исполнению
                    в соответствии с законодательством Российской Федерации об
                    исполнительном производстве.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    7.4. Обработка персональных данных необходима для исполнения
                    договора, стороной которого либо выгодоприобретателем или
                    поручителем по которому является субъект персональных
                    данных, а также для заключения договора по инициативе
                    субъекта персональных данных или договора, по которому
                    субъект персональных данных будет являться
                    выгодоприобретателем или поручителем.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    7.5. Обработка персональных данных необходима для
                    осуществления прав и законных интересов оператора или
                    третьих лиц либо для достижения общественно значимых целей
                    при условии, что при этом не нарушаются права и свободы
                    субъекта персональных данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    7.6. Осуществляется обработка персональных данных, доступ
                    неограниченного круга лиц к которым предоставлен субъектом
                    персональных данных либо по его просьбе (далее —
                    общедоступные персональные данные).
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    7.7. Осуществляется обработка персональных данных,
                    подлежащих опубликованию или обязательному раскрытию в
                    соответствии с федеральным законом.
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  8. Порядок сбора, хранения, передачи и других видов обработки
                  персональных данных
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    Безопасность персональных данных, которые обрабатываются
                    Оператором, обеспечивается путем реализации правовых,
                    организационных и технических мер, необходимых для
                    выполнения в полном объеме требований действующего
                    законодательства в области защиты персональных данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.1. Оператор обеспечивает сохранность персональных данных и
                    принимает все возможные меры, исключающие доступ к
                    персональным данным неуполномоченных лиц.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.2. Персональные данные Пользователя никогда, ни при каких
                    условиях не будут переданы третьим лицам, за исключением
                    случаев, связанных с исполнением действующего
                    законодательства либо в случае, если субъектом персональных
                    данных дано согласие Оператору на передачу данных третьему
                    лицу для исполнения обязательств по гражданско-правовому
                    договору.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.3. В случае выявления неточностей в персональных данных,
                    Пользователь может актуализировать их самостоятельно, путем
                    направления Оператору уведомление на адрес электронной почты
                    Оператора{" "}
                    <a
                      className="personal-data-processing-policy__list-link"
                      href="mailto:Info@gk-triland.ru"
                    >
                      Info@gk-triland.ru
                    </a>{" "}
                    с пометкой «Актуализация персональных данных».
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.4. Срок обработки персональных данных определяется
                    достижением целей, для которых были собраны персональные
                    данные, если иной срок не предусмотрен договором или
                    действующим законодательством. Пользователь может в любой
                    момент отозвать свое согласие на обработку персональных
                    данных, направив Оператору уведомление посредством
                    электронной почты на электронный адрес Оператора{" "}
                    <a
                      className="personal-data-processing-policy__list-link"
                      href="mailto:Info@gk-triland.ru"
                    >
                      Info@gk-triland.ru
                    </a>{" "}
                    с пометкой «Отзыв согласия на обработку персональных
                    данных».
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.5. Вся информация, которая собирается сторонними
                    сервисами, в том числе платежными системами, средствами
                    связи и другими поставщиками услуг, хранится и
                    обрабатывается указанными лицами (Операторами) в
                    соответствии с их Пользовательским соглашением и Политикой
                    конфиденциальности. Субъект персональных данных и/или с
                    указанными документами. Оператор не несет ответственность за
                    действия третьих лиц, в том числе указанных в настоящем
                    пункте поставщиков услуг.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.6. Установленные субъектом персональных данных запреты на
                    передачу (кроме предоставления доступа), а также на
                    обработку или условия обработки (кроме получения доступа)
                    персональных данных, разрешенных для распространения, не
                    действуют в случаях обработки персональных данных в
                    государственных, общественных и иных публичных интересах,
                    определенных законодательством РФ.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.7. Оператор при обработке персональных данных обеспечивает
                    конфиденциальность персональных данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.8. Оператор осуществляет хранение персональных данных в
                    форме, позволяющей определить субъекта персональных данных,
                    не дольше, чем этого требуют цели обработки персональных
                    данных, если срок хранения персональных данных не установлен
                    федеральным законом, договором, стороной которого,
                    выгодоприобретателем или поручителем по которому является
                    субъект персональных данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    8.9. Условием прекращения обработки персональных данных
                    может являться достижение целей обработки персональных
                    данных, истечение срока действия согласия субъекта
                    персональных данных, отзыв согласия субъектом персональных
                    данных или требование о прекращении обработки персональных
                    данных, а также выявление неправомерной обработки
                    персональных данных.
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  9. Перечень действий, производимых Оператором с полученными
                  персональными данными
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    9.1. Оператор осуществляет сбор, запись, систематизацию,
                    накопление, хранение, уточнение (обновление, изменение),
                    извлечение, использование, передачу (распространение,
                    предоставление, доступ), обезличивание, блокирование,
                    удаление и уничтожение персональных данных.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    9.2. Оператор осуществляет автоматизированную обработку
                    персональных данных с получением и/или передачей полученной
                    информации по информационно-телекоммуникационным сетям или
                    без таковой.
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  10. Трансграничная передача персональных данных
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    10.1. Оператор до начала осуществления деятельности по
                    трансграничной передаче персональных данных обязан уведомить
                    уполномоченный орган по защите прав субъектов персональных
                    данных о своем намерении осуществлять трансграничную
                    передачу персональных данных (такое уведомление направляется
                    отдельно от уведомления о намерении осуществлять обработку
                    персональных данных).
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    10.2. Оператор до подачи вышеуказанного уведомления, обязан
                    получить от органов власти иностранного государства,
                    иностранных физических лиц, иностранных юридических лиц,
                    которым планируется трансграничная передача персональных
                    данных, соответствующие сведения.
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  11. Конфиденциальность персональных данных
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    Оператор и иные лица, получившие доступ к персональным
                    данным, обязаны не раскрывать третьим лицам и не
                    распространять персональные данные без согласия субъекта
                    персональных данных, если иное не предусмотрено федеральным
                    законом.
                  </li>
                </ol>
              </li>
              <li className="personal-data-processing-policy__list-block">
                <h3 className="personal-data-processing-policy__list-item-title">
                  12. Заключительные положения
                </h3>
                <ol className="personal-data-processing-policy__list-num-subparagraphs">
                  <li className="personal-data-processing-policy__list-num-item">
                    12.1. Пользователь может получить любые разъяснения по
                    интересующим вопросам, касающимся обработки его персональных
                    данных, обратившись к Оператору с помощью электронной почты{" "}
                    <a
                      className="personal-data-processing-policy__list-link"
                      href="mailto:Info@gk-triland.ru"
                    >
                      Info@gk-triland.ru
                    </a>
                    .
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    12.2. В данном документе будут отражены любые изменения
                    политики обработки персональных данных Оператором. Политика
                    действует бессрочно до замены ее новой версией.
                  </li>
                  <li className="personal-data-processing-policy__list-num-item">
                    12.3. Актуальная версия Политики в свободном доступе
                    расположена в сети Интернет по адресу{" "}
                    <a
                      className="personal-data-processing-policy__list-link"
                      href="https://triland.ru"
                    >
                      https://triland.ru
                    </a>
                    .
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PersonalDataProcessingPolicy;
