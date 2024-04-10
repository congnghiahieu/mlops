Reconstruct of MLOps project

Original projects:

- https://github.com/sonnguyenvnu/mlops_frontend.git (frontend)
- https://github.com/sonnguyenvnu/mlops_backend.git (backend)
- https://github.com/sonnguyenvnu/mlops_ml_service.git (ml-service)

## Requirements

- Node 16 or above
- Yarn
- MongoDB

## Run project

- This reconstructed project just includes [frontend](https://github.com/sonnguyenvnu/mlops_frontend.git) and [backend](https://github.com/sonnguyenvnu/mlops_backend.git)

### Frontend

- Create `.env` file in `frontend` folder like example below

- Example:

```bash
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ML_SERVICE_ADDR= # ignore this
```

- Run:

```bash
yarn start
```

### Backend

- Ensure you have MongoDB running

- Create `.env` file in `backend` folder like example below

- Example:

```bash
PORT=8000
DATABASE_URL=mongodb://localhost:27017
GCP_BUCKET_NAME=fake_string # you can use fake value for this field
GCP_SERVICE_ACCOUNT=fake_string # you can use fake value for this field
GCP_PROJECT_ID=fake_string # you can use fake value for this field
ACCESS_TOKEN_SECRET=b9ca3961b32507a58fbe5a6975762a40fc17042f7721e0bc91327731ed4b5604dc558eff855dd726319499c4d140b5bbc67338f1913a84687917f121d1105bab
REFRESH_TOKEN_SECRET=fb664b6b7d530fcda166663f6049007cf46a2fb619bef36ee5bf342e8937a8f8f0788083a57efaac9be3dfcc0b110b21cd0acb53f796fc3d03b303fff354f810
WEB_SERVICE_ADDR=http://localhost:3000
ML_SERVICE_ADDR= # ignore this
```

- Run:

```bash
yarn start # or yarn dev
```
