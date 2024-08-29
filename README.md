
# Endpoint for upload image using Imagekit and multer

```https://harmonious-benevolence-production.up.railway.app/```


## API Reference

#### POST

```http
  POST /upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `image` | `file` | **Required**. Image file to be uploaded
  `title` |`string`| **Required**. Image Title 
  `description` | `string`| **Required**. Deskripsi Gambar

##### Response
```
{
    "message": "Upload file sukses",
    "image": {
        "id": 7,
        "title": "after deploy pls be nice",
        "description": "part iii for delete",
        "imageUrl": "https://ik.imagekit.io/apalahdia/uploads/output_ChZVohg4G.png",
        "uploadDate": "2024-08-29T16:39:42.024Z",
        "dimensions": "width: 2779 px, height: 1979 px",
        "fileSize": 262,
        "fileType": "image"
    }
}
```

#### GET All Items

```http
  GET /images
```

##### Response
```
[
    {
        "id": 1,
        "title": "adasd",
        "description": "asd",
        "imageUrl": "https://ik.imagekit.io/apalahdia/uploads/download__4__****.jpeg"
    },
    {
        "id": 2,
        "title": "adasd",
        "description": "asd",
        "imageUrl": "https://ik.imagekit.io/apalahdia/uploads/download__4__*****D.jpeg"
    }
]
```


#### Get item by id

```http
  GET /images/${id}
```
##### Response
```
{
    "id": 5,
    "title": "Updated Title",
    "description": "Updated Description",
    "imageUrl": "https://ik.imagekit.io/apalahdia/uploads/output_Qs4bJ77ut.png",
    "uploadDate": "2024-08-29T15:59:20.874Z",
    "dimensions": "width: 2779 px, height: 1979 px",
    "fileSize": 262,
    "fileType": "image"
}
```

#### PUT

```http
  PUT /images/${id}
```

  ##### Body Request
```
{
  "title": "Updated Title",
  "description": "Updated Description"
}
```


##### Response
```
{
  "message": "Gambar berhasil diperbarui",
  "image": {
    "id": 7,
    "title": "Updated Title",
    "description": "Updated Description",
    "imageUrl": "https://ik.imagekit.io/apalahdia/uploads/output_ChZVohg4G.png",
    "uploadDate": "2024-08-29T16:39:42.024Z",
    "dimensions": "width: 2779 px, height: 1979 px",
    "fileSize": 262,
    "fileType": "image"
  }
}

```

#### Delete

```http
  DELETE /images/${id}
```

##### Response
```
{
  "message": "Gambar berhasil dihapus"
}

```


