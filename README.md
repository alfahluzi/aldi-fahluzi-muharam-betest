# aldi-fahluzi-muharam-betest

hosted url: https://62240-3000.2.codesphere.com
api url: 
  1. [post] /api/user
  2. [get] /api/account/:accountNumber
  3. [get] /api/identity/:identitiyNumber
  4. [post] /api/auth/token
```
userdata:{
    userName: string;
    accountNumber: number;
    emailAddress: string;
    identityNumber: number;
}
```
## Cara Menjalankan Server

### 1. Clone Repository

Clone repositori ini ke mesin lokal Anda menggunakan perintah berikut:

```bash
git clone https://github.com/username/aldi-fahluzi-muharam-betest.git
```

### 2. Install Library

```bash
cd aldi-fahluzi-muharam-betest
npm install
```

### 3. Setup Environment

Buat file `.env` di root proyek Anda dan tambahkan variabel lingkungan berikut:

```
MONGO_PWD=your_mongo_password
JWT_SCRT=your_jwt_secret
```

### 4. Start Server

#### Untuk menjalankan server pada development, gunakan perintah berikut:

```bash
npm run dev
```
#### Untuk build server menjadi bentuk JS
```bash
npm run build
```
#### Untuk menjalankan server pada production, gunakan perintah berikut:
```bash
npm run start
```
