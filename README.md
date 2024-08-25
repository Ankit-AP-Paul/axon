<h1 align="center">
  <br>
  <a href="https://github.com/Ankit-AP-Paul/axon"><img src="https://github.com/user-attachments/assets/83a518b7-1af9-4672-aa16-aa7527950205" alt="Axon Logo" width="200"></a>
  <br>
  Axon
  <br>
</h1>

<img src="https://img.playbook.com/ITZqpuM98HrUFScs6dHxkJL97plM2KBnt2GT0_N1p8Y/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VlNDA5NDdh/LTBmY2ItNDJkZC1i/ZDA0LTJhNTQxMjE5/NDFlYw" />
<img src="https://img.playbook.com/V9ikme4o3mu9jZeSD6P1ZeLPzLtgxc7-fXNVe26qERQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdmODgzMTNm/LTg3NTYtNGM1Ni05/NDlmLWNiOGQ4M2Nj/MDA5Zg"/>

<h4>
  Our project integrates the Wolfram API to handle complex calculations for provider fees and rental costs. By leveraging Wolfram's computational power, we ensure accurate and efficient calculations that      are essential for fair and transparent transactions within our platform. This integration highlights the versatility and reliability of Wolfram's API in handling real-time financial computations, making 
  our project a strong contender in the Wolfram: API track.
</h4>
<img src="https://github.com/user-attachments/assets/d1110dea-392b-4cf9-87a4-1f535a9b4dae" />

USAGE EXAMPLE-> ```http://api.wolframalpha.com/v1/simple?appid=<your-app-id>&i=What+airplanes+are+flying+overhead%3F```

We are using `Wolfram | Alpha Instant Calculators API`, for cost calculation of a Linear Regression equation.
<br />
![Screenshot 2024-08-25 151025](https://github.com/user-attachments/assets/069e31bf-5415-4c2e-b847-1beace0a8a5a)


<h4 align="center">Decentralized AI training powered by resource-driven computing and secure data sharing.</h4>

## 📋 ToC
- [About](#about)
- [Built with](#built-with)
- [Key Features](#key-features)
- [Demo](#demo)
- [Deployment](#deployment)
- [API Reference](#api-reference)
- [Authors](#authors)
- [Contact Us](#contact-us)


## About
Axon is a decentralized physical infrastructure network for AI as a training service. This utilizes the concept of DePIN. Here we leverage the blockchain network to organize and manage the physical hardware network and in the end allow users to use desired machines for training their AI models. Users with higher specs can list their devices in this network and thus earn too, thus a well maintained use of excess resources, indeed.

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Built with
- Next.js
- Tailwind CSS
- Node
- Express.js
- Web3.js
- Tezos Wallet
- MinIO (Bucket)
- Beeceptor
- GitHub Actions
- Render
- Vercel

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Key Features
-   First Decentralised Physical Infrastructure Network for AI Training as a service.
-   Resource Monetization for high spec machine providers
-   Trust and Security due to blockchain in monetary transactions
-   Build for traning AI models remotely
-   Community Driven
-   Flexibility
-   Cost Efficiency

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Demo

[![Watch the video]()]()

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Deployment

To deploy the backend run

```bash
  cd backend
  npm install
  npm run dev
```

To deploy the frontend run

```bash
  cd frontend
  bun install
  bun dev
```

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## API Reference
All the endpoins are well documented by using Beeceptor

#### Auth Sign Up

```
  POST /auth/sign-up
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |
| `name`     | `string` | **Required**. |
| `address`  | `string` | **Required**. |
| `role`     | `string` | **Required**. |

#### Auth Login

```
  POST /auth/login
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Create Machine

```
  POST /machine/create
```

| Parameter | Type      | Description   |
| :-------- | :-------- | :------------ |
| `userId`  | `string`  | **Required**. |
| `title`   | `string`  | **Required**. |
| `cpu`     | `integer` | **Required**. |
| `ram`     | `integer` | **Required**. |
| `size`    | `integer` | **Required**. |
| `time`    | `integer` | **Required**. |

#### Storing Data

```
  GET /store/presigned-url
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `name`    | `string` | **Required**. |

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Authors

-   [@Ankit Paul](https://github.com/Ankit-AP-Paul)
-   [@Abhirup Saha](https://github.com/Abhirup-02)
-   [@Diptanshu Mahish](https://github.com/diptanshumahish)


## Contact Us

If you have any queries, feedback, or want to collaborate, please reach out to us at our [discord](https://discord.gg/aqdx4JBC) channel.

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>
