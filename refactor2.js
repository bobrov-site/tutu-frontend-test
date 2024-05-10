function drawRating(vote) {
    const stars = {
        '★☆☆☆☆': ((vote) => vote >= 0 && vote <= 20),
        '★★☆☆☆': ((vote) => vote > 20 && vote <= 40) ,
        '★★★☆☆': ((vote) => vote > 40 && vote <= 60) ,
        '★★★★☆': ((vote) => vote > 60 && vote <= 80) ,
        '★★★★★': ((vote) => vote > 80 && vote <= 100),
    }
    return Object.keys(stars).find((star) => stars[star](vote))
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★