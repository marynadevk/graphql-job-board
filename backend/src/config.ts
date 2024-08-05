import 'dotenv/config';

export const envConfig = {
  dbFilePath: process.env.DB_FILE_PATH,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
};

export const validationConfig = {
  PASSWORD_MIN_LENGTH: 5,
  PASSWORD_MAX_LENGTH: 15,
}