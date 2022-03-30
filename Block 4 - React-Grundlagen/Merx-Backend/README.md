# Merx Backend

## Development

```sh
npm install  # installiert die dependencies
node server  # startet den server auf port 3001
```


## API

| HTTP     | Pfad            | Aktion |
| -------- | --------------- | ------ |
| `POST`   | `/register`     | Legt einen neuen Nutzer an |
| `POST`   | `/login`        | Loggt einen Nutzer ein |
| `POST`   | `/logout`       | Loggt einen Nutzer aus |
| `GET`    | `/products/`    | Gibt alle Produkte zurück |
| `GET`    | `/products/:id` | Gibt ein Produkt zurück |
| `POST`   | `/products/`    | Legt ein neues Produkt an |
