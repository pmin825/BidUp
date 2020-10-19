json.extract! product, :id, :name, :price, :description, :location, :seller_id 

if product.photo.attached?
    json.photo_url url_for(product.photo)
else
    json.photo_url ''
end