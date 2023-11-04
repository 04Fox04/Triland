import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import { body, validationResult } from 'express-validator'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors({
  origin: ['http://localhost:3001', 'http://триланд.рф', 'https://триланд.рф', 'http://xn--80aikmlon.xn--p1ai', 'https://xn--80aikmlon.xn--p1ai', 'https://xn----7sbkcsqcrxt.xn--p1ai'],
  optionsSuccessStatus: 200,
}));

// Настройка транспортера для отправки электронной почты
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});


function trimReplace(value) {
  if (typeof value === 'string') {
    return value.trim().replace(/\s+/g, ' ');
  }
  return value;
}


// Валидация данных при обработке POST-запроса от клиента
const validateData = [
  body('name').customSanitizer(trimReplace).notEmpty().withMessage('Нет имени.')
    .isLength({ min: 2, max: 50 }).withMessage('Имя должно быть 2-50 символов.'),
  body('phone').customSanitizer(trimReplace).notEmpty().withMessage('Нет телефона.')
    .matches(/^(?!.*[-+()]$)(?:\+\d{1,3}\s?)?[\d\s()-]+$/).withMessage('Некорректный телефон.'),
];


// Обработчик POST-запроса от клиента с JSON-данными
app.post('/send-email', validateData, async (req, res) => {

  try {
    // Проверяем наличие ошибок валидации
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, phone } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL, // Адрес отправителя
      to: process.env.EMAIL_RECIPIENT,   // Адрес получателя
      subject: `✔ Просьба перезвонить от ${name}`,
      html: `
        <p><strong>Номер телефона :</strong> ${phone}</p>`,
    });

    res.send('Сообщение отправлено!');

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});


app.listen(PORT, (err) => {
  if (err) {
      return console.log(err);
  }
  console.log(`Сервер запущен! ${PORT}`);
})
