json.extract! product, :id, :name, :price, :description, :location, :seller_id 

if product.photoFile.attached?
    json.photo_url url_for(product.photoFile)
else
    json.photo_url ''
end