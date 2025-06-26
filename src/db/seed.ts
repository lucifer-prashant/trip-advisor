// src/db/seed.ts
import { db } from "@vercel/postgres"
import * as dotenv from "dotenv"

// This makes sure the script can read your .env.local file
dotenv.config({ path: ".env.local" })

const spotsToSeed = [
	// Andaman and Nicobar Islands
	{
		name: "Radhanagar Beach, Havelock Island",
		description:
			"Pristine white sand beach on Havelock Island, often ranked among the best in Asia.",
		imageUrl:
			"https://images.unsplash.com/photo-1600255941913-5614556c1699?w=400",
		state: "Andaman and Nicobar Islands",
	},
	{
		name: "Cellular Jail National Memorial",
		description:
			"A colonial prison in Port Blair, echoing the tales of Indian freedom fighters.",
		imageUrl:
			"https://images.unsplash.com/photo-1620306135287-293d408c4a04?w=400",
		state: "Andaman and Nicobar Islands",
	},
	{
		name: "Ross Island (Netaji Subhas Chandra Bose Dweep)",
		description:
			"Ruins of a British administrative headquarters amidst lush greenery and friendly deer.",
		imageUrl:
			"https://images.unsplash.com/photo-1623976369403-93dea9955519?w=400",
		state: "Andaman and Nicobar Islands",
	},
	{
		name: "Bharatpur Beach, Neil Island",
		description:
			"Known for its stunning coral reefs, clear waters, and relaxed vibe. Ideal for snorkeling.",
		imageUrl:
			"https://images.unsplash.com/photo-1610967882585-709d421b4a3c?w=400",
		state: "Andaman and Nicobar Islands",
	},
	{
		name: "Limestone Caves, Baratang Island",
		description:
			"Journey through dense mangrove creeks to discover fascinating natural limestone formations.",
		imageUrl:
			"https://images.unsplash.com/photo-1603875328283-99b4a45a5f70?w=400",
		state: "Andaman and Nicobar Islands",
	},

	// Andhra Pradesh
	{
		name: "Venkateswara Temple, Tirumala",
		description:
			"One of the most revered Hindu temples, nestled in the scenic hills of Tirumala.",
		imageUrl:
			"https://images.unsplash.com/photo-1602697814759-53a7a5820a00?w=400",
		state: "Andhra Pradesh",
	},
	{
		name: "Araku Valley",
		description:
			"A scenic hill station known for its coffee plantations, waterfalls, and tribal culture.",
		imageUrl:
			"https://images.unsplash.com/photo-1634152968577-d6a455239567?w=400",
		state: "Andhra Pradesh",
	},
	{
		name: "Borra Caves",
		description:
			"Stunning limestone caves in the Ananthagiri hills, with magnificent stalactite formations.",
		imageUrl:
			"https://images.unsplash.com/photo-1628364137933-398579325996?w=400",
		state: "Andhra Pradesh",
	},
	{
		name: "Gandikota",
		description:
			"Often called the 'Grand Canyon of India', featuring a spectacular gorge and an ancient fort.",
		imageUrl:
			"https://images.unsplash.com/photo-1601783777178-957116135454?w=400",
		state: "Andhra Pradesh",
	},
	{
		name: "Belum Caves",
		description:
			"The longest and largest cave system open to the public on the Indian subcontinent.",
		imageUrl:
			"https://images.unsplash.com/photo-1626227650588-43801262db66?w=400",
		state: "Andhra Pradesh",
	},

	// Arunachal Pradesh
	{
		name: "Tawang Monastery",
		description:
			"The largest monastery in India, offering breathtaking views of the Tawang Valley.",
		imageUrl:
			"https://images.unsplash.com/photo-1605549119932-5178af315b23?w=400",
		state: "Arunachal Pradesh",
	},
	{
		name: "Ziro Valley",
		description:
			"A picturesque valley, home to the Apatani tribe, and a UNESCO World Heritage site contender.",
		imageUrl:
			"https://images.unsplash.com/photo-1618319983962-d343467f433f?w=400",
		state: "Arunachal Pradesh",
	},
	{
		name: "Sela Pass",
		description:
			"A high-altitude mountain pass offering stunning views of snow-capped peaks and the Sela Lake.",
		imageUrl:
			"https://images.unsplash.com/photo-1627885458203-42e779a52e9a?w=400",
		state: "Arunachal Pradesh",
	},
	{
		name: "Namdapha National Park",
		description:
			"A biodiversity hotspot in the Eastern Himalayas, home to four species of big cats.",
		imageUrl:
			"https://images.unsplash.com/photo-1579789398869-797b5a192842?w=400",
		state: "Arunachal Pradesh",
	},
	{
		name: "Dirang Valley",
		description:
			"A charming valley known for its hot water springs, apple orchards, and monasteries.",
		imageUrl:
			"https://images.unsplash.com/photo-1625349581423-38add1424b9a?w=400",
		state: "Arunachal Pradesh",
	},

	// Assam
	{
		name: "Kaziranga National Park",
		description:
			"A UNESCO World Heritage site, famous for the great one-horned rhinoceros.",
		imageUrl:
			"https://images.unsplash.com/photo-1582234201258-08aad84140d3?w=400",
		state: "Assam",
	},
	{
		name: "Kamakhya Temple",
		description:
			"A major Hindu pilgrimage site in Guwahati, one of the oldest Shakti Pithas.",
		imageUrl:
			"https://images.unsplash.com/photo-1617653241527-94d33446de6a?w=400",
		state: "Assam",
	},
	{
		name: "Majuli Island",
		description:
			"The world's largest river island, known for its unique culture and Vaishnavite Satras.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Assam",
	},
	{
		name: "Umananda Island",
		description:
			"The smallest inhabited river island in the world, in the middle of the Brahmaputra river.",
		imageUrl:
			"https://images.unsplash.com/photo-1605638237258-d9a464a37651?w=400",
		state: "Assam",
	},
	{
		name: "Sivasagar Sivadol",
		description:
			"A group of historic temples on the banks of the Sivasagar tank, built in the 18th century.",
		imageUrl:
			"https://images.unsplash.com/photo-1627814144907-712f677d2427?w=400",
		state: "Assam",
	},

	// Bihar
	{
		name: "Mahabodhi Temple, Bodh Gaya",
		description:
			"A UNESCO World Heritage Site where Lord Buddha is said to have attained Enlightenment.",
		imageUrl:
			"https://images.unsplash.com/photo-1577154974465-968b81373a62?w=400",
		state: "Bihar",
	},
	{
		name: "Nalanda University Ruins",
		description:
			"Ruins of an ancient center of learning, showcasing a rich history of education in India.",
		imageUrl:
			"https://images.unsplash.com/photo-1620766193355-27a93a407a56?w=400",
		state: "Bihar",
	},
	{
		name: "Great Buddha Statue, Bodh Gaya",
		description:
			"An awe-inspiring 80-foot statue of the Buddha in a meditation posture.",
		imageUrl:
			"https://images.unsplash.com/photo-1595287513840-272e6169e6a2?w=400",
		state: "Bihar",
	},
	{
		name: "Takht Sri Patna Sahib",
		description:
			"A holy pilgrimage site for Sikhs, marking the birthplace of Guru Gobind Singh.",
		imageUrl:
			"https://images.unsplash.com/photo-1631557991919-4e5a31a90c68?w=400",
		state: "Bihar",
	},
	{
		name: "Glass Bridge, Rajgir",
		description:
			"A stunning skywalk offering panoramic views of the scenic Rajgir hills.",
		imageUrl:
			"https://images.unsplash.com/photo-1634139459048-5250393b8a3e?w=400",
		state: "Bihar",
	},

	// Chandigarh
	{
		name: "The Rock Garden",
		description:
			"A unique sculpture garden created from industrial and home waste by artist Nek Chand.",
		imageUrl:
			"https://images.unsplash.com/photo-1587304199924-f35b0e8d9b6c?w=400",
		state: "Chandigarh",
	},
	{
		name: "Sukhna Lake",
		description:
			"A serene man-made lake at the foothills of the Himalayas, perfect for boating and walks.",
		imageUrl:
			"https://images.unsplash.com/photo-1609148386311-450f38b9e5d2?w=400",
		state: "Chandigarh",
	},
	{
		name: "Capitol Complex",
		description:
			"A UNESCO World Heritage site, a masterpiece of modern architecture by Le Corbusier.",
		imageUrl:
			"https://images.unsplash.com/photo-1618428532986-1335cf71b697?w=400",
		state: "Chandigarh",
	},
	{
		name: "Zakir Hussain Rose Garden",
		description:
			"Asia's largest rose garden, featuring thousands of rose bushes and a variety of flowers.",
		imageUrl:
			"https://images.unsplash.com/photo-1598822295421-4d375d3a516d?w=400",
		state: "Chandigarh",
	},
	{
		name: "Open Hand Monument",
		description:
			"A symbolic structure by Le Corbusier, representing peace and prosperity.",
		imageUrl:
			"https://images.unsplash.com/photo-1627885458145-8f6b0f9c2c6a?w=400",
		state: "Chandigarh",
	},

	// Chhattisgarh
	{
		name: "Chitrakote Falls",
		description:
			"Known as the 'Niagara Falls of India', this horseshoe-shaped waterfall is a spectacular sight.",
		imageUrl:
			"https://images.unsplash.com/photo-1620451433282-3536254c74a3?w=400",
		state: "Chhattisgarh",
	},
	{
		name: "Kanger Valley National Park",
		description:
			"A beautiful national park featuring limestone caves, waterfalls, and diverse wildlife.",
		imageUrl:
			"https://images.unsplash.com/photo-1630560205894-3a5675e24b43?w=400",
		state: "Chhattisgarh",
	},
	{
		name: "Tirathgarh Falls",
		description:
			"A magnificent block-type waterfall that splits into multiple cascades as it drops.",
		imageUrl:
			"https://images.unsplash.com/photo-1631557991958-3d8e5f2a1a0c?w=400",
		state: "Chhattisgarh",
	},
	{
		name: "Sirpur Heritage Site",
		description:
			"An archaeological site with ancient Buddhist, Hindu, and Jain temples.",
		imageUrl:
			"https://images.unsplash.com/photo-1627814144907-712f677d2427?w=400",
		state: "Chhattisgarh",
	},
	{
		name: "Bastar Palace",
		description:
			"The historic palace of the Bastar kingdom, showcasing the region's rich tribal heritage.",
		imageUrl:
			"https://images.unsplash.com/photo-1634139459048-5250393b8a3e?w=400",
		state: "Chhattisgarh",
	},

	// Dadra and Nagar Haveli and Daman and Diu
	{
		name: "Diu Fort",
		description:
			"A massive Portuguese fort with a lighthouse, offering panoramic views of the Arabian Sea.",
		imageUrl:
			"https://images.unsplash.com/photo-1604430480993-47a3e617e9a8?w=400",
		state: "Dadra and Nagar Haveli and Daman and Diu",
	},
	{
		name: "Nagoa Beach, Diu",
		description:
			"A beautiful, horseshoe-shaped beach known for its calm waters and various water sports.",
		imageUrl:
			"https://images.unsplash.com/photo-1604430480931-50798a3b5a77?w=400",
		state: "Dadra and Nagar Haveli and Daman and Diu",
	},
	{
		name: "St. Paul's Church, Diu",
		description:
			"A stunning example of Baroque architecture, one of the best-preserved Portuguese churches in India.",
		imageUrl:
			"https://images.unsplash.com/photo-1618319983962-d343467f433f?w=400",
		state: "Dadra and Nagar Haveli and Daman and Diu",
	},
	{
		name: "Devka Beach, Daman",
		description:
			"A popular beach with an amusement park, musical fountain, and picturesque black sand.",
		imageUrl:
			"https://images.unsplash.com/photo-1609148386311-450f38b9e5d2?w=400",
		state: "Dadra and Nagar Haveli and Daman and Diu",
	},
	{
		name: "Jampore Beach, Daman",
		description:
			"A serene and clean beach, ideal for swimming and enjoying a peaceful sunset.",
		imageUrl:
			"https://images.unsplash.com/photo-1604430480993-47a3e617e9a8?w=400",
		state: "Dadra and Nagar Haveli and Daman and Diu",
	},

	// Delhi
	{
		name: "India Gate",
		description:
			"An iconic war memorial arch dedicated to the soldiers of British India who died in WWI.",
		imageUrl:
			"https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
		state: "Delhi",
	},
	{
		name: "Qutub Minar",
		description:
			"A UNESCO World Heritage site, a towering minaret and victory tower from the Sultanate era.",
		imageUrl:
			"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400",
		state: "Delhi",
	},
	{
		name: "Humayun's Tomb",
		description:
			"A magnificent tomb of the Mughal Emperor Humayun, a precursor to the Taj Mahal.",
		imageUrl:
			"https://images.unsplash.com/photo-1504917595217-d4dc5b7222af?w=400",
		state: "Delhi",
	},
	{
		name: "Red Fort (Lal Qila)",
		description:
			"A historic fort that served as the main residence of the Mughal Emperors for nearly 200 years.",
		imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400",
		state: "Delhi",
	},
	{
		name: "Lotus Temple",
		description:
			"A Baháʼí House of Worship, famous for its unique flowerlike shape and serene atmosphere.",
		imageUrl:
			"https://images.unsplash.com/photo-1533929736458-ca588912185e?w=400",
		state: "Delhi",
	},

	// Goa
	{
		name: "Baga Beach",
		description:
			"Famous for its vibrant nightlife, water sports, and beach shacks.",
		imageUrl:
			"https://images.unsplash.com/photo-1590379912648-a027e0242517?w=400",
		state: "Goa",
	},
	{
		name: "Dudhsagar Falls",
		description:
			"A majestic four-tiered waterfall on the Mandovi River, its name meaning 'Sea of Milk'.",
		imageUrl:
			"https://images.unsplash.com/photo-1601728282744-814d9b35b6f3?w=400",
		state: "Goa",
	},
	{
		name: "Fort Aguada",
		description:
			"A well-preserved 17th-century Portuguese fort with a lighthouse, overlooking the Arabian Sea.",
		imageUrl:
			"https://images.unsplash.com/photo-1580744299313-9a3b2b8c2ebb?w=400",
		state: "Goa",
	},
	{
		name: "Basilica of Bom Jesus",
		description:
			"A UNESCO World Heritage site in Old Goa, holding the mortal remains of St. Francis Xavier.",
		imageUrl:
			"https://images.unsplash.com/photo-1593923617325-154b5155c276?w=400",
		state: "Goa",
	},
	{
		name: "Palolem Beach",
		description:
			"A crescent-shaped beach in South Goa known for its calm waters, palm trees, and silent discos.",
		imageUrl:
			"https://images.unsplash.com/photo-1512353384353-24e5d5718a38?w=400",
		state: "Goa",
	},

	// Gujarat
	{
		name: "Statue of Unity",
		description:
			"The world's tallest statue, depicting Indian statesman Sardar Vallabhbhai Patel.",
		imageUrl:
			"https://images.unsplash.com/photo-1616851678198-d78263533b14?w=400",
		state: "Gujarat",
	},
	{
		name: "Great Rann of Kutch",
		description:
			"A vast salt marsh that transforms into a surreal white desert, famous for the Rann Utsav.",
		imageUrl:
			"https://images.unsplash.com/photo-1617473534578-991c0a8e8e7a?w=400",
		state: "Gujarat",
	},
	{
		name: "Sabarmati Ashram",
		description:
			"The former residence of Mahatma Gandhi, a place of historical significance and tranquility.",
		imageUrl:
			"https://images.unsplash.com/photo-1621287951059-8344ac37f769?w=400",
		state: "Gujarat",
	},
	{
		name: "Gir National Park",
		description:
			"The last remaining home of the Asiatic lion, a premier destination for wildlife enthusiasts.",
		imageUrl:
			"https://images.unsplash.com/photo-1601835925249-c1e1a53381e4?w=400",
		state: "Gujarat",
	},
	{
		name: "Somnath Temple",
		description:
			"One of the twelve Jyotirlinga shrines of Lord Shiva, a revered pilgrimage site on the coast.",
		imageUrl:
			"https://images.unsplash.com/photo-1628240507567-a04495e3f5e5?w=400",
		state: "Gujarat",
	},

	// Haryana
	{
		name: "Sultanpur National Park",
		description:
			"A bird sanctuary ideal for bird watching, especially for migratory birds in winter.",
		imageUrl: "https://images.unsplash.com/photo-1543834046-579c3f582b13?w=400",
		state: "Haryana",
	},
	{
		name: "Yadavindra Gardens (Pinjore Gardens)",
		description:
			"A beautiful 17th-century Mughal garden, featuring fountains and historical palaces.",
		imageUrl:
			"https://images.unsplash.com/photo-1627885458145-8f6b0f9c2c6a?w=400",
		state: "Haryana",
	},
	{
		name: "Brahma Sarovar, Kurukshetra",
		description:
			"A sacred water tank in the historic land of Mahabharata, bustling during solar eclipses.",
		imageUrl:
			"https://images.unsplash.com/photo-1631557991919-4e5a31a90c68?w=400",
		state: "Haryana",
	},
	{
		name: "Kingdom of Dreams",
		description:
			"India's first live entertainment and leisure destination, showcasing Indian culture and arts.",
		imageUrl:
			"https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
		state: "Haryana",
	},
	{
		name: "Star Monument (Samadhi of Tara Chand Ji)",
		description:
			"A unique hexagonal monument and a beautiful example of modern Indian architecture.",
		imageUrl:
			"https://images.unsplash.com/photo-1627814144907-712f677d2427?w=400",
		state: "Haryana",
	},

	// Himachal Pradesh
	{
		name: "The Ridge, Shimla",
		description:
			"The cultural hub of Shimla, offering stunning views of the mountain ranges.",
		imageUrl:
			"https://images.unsplash.com/photo-1593972740391-248c83020625?w=400",
		state: "Himachal Pradesh",
	},
	{
		name: "Solang Valley, Manali",
		description:
			"A picturesque valley near Manali, a hub for adventure sports like paragliding and skiing.",
		imageUrl:
			"https://images.unsplash.com/photo-1610967882585-709d421b4a3c?w=400",
		state: "Himachal Pradesh",
	},
	{
		name: "McLeod Ganj, Dharamshala",
		description:
			"Home to the Dalai Lama, a vibrant center for Tibetan culture, spirituality, and crafts.",
		imageUrl:
			"https://images.unsplash.com/photo-1593495861183-524419523f46?w=400",
		state: "Himachal Pradesh",
	},
	{
		name: "Spiti Valley",
		description:
			"A high-altitude cold desert, known for rugged landscapes, ancient monasteries, and starry nights.",
		imageUrl:
			"https://images.unsplash.com/photo-1606560195286-8a0357d45e05?w=400",
		state: "Himachal Pradesh",
	},
	{
		name: "Kasol, Parvati Valley",
		description:
			"A charming village on the banks of the Parvati River, popular among backpackers and trekkers.",
		imageUrl:
			"https://images.unsplash.com/photo-1591017403233-fd8b6c8e3e44?w=400",
		state: "Himachal Pradesh",
	},

	// Jammu and Kashmir
	{
		name: "Dal Lake, Srinagar",
		description:
			"An iconic lake known for its houseboats (shikaras) and floating markets, the 'Jewel of Srinagar'.",
		imageUrl:
			"https://images.unsplash.com/photo-1578899013340-5bb919d3f1a0?w=400",
		state: "Jammu and Kashmir",
	},
	{
		name: "Gulmarg Gondola",
		description:
			"One of the world's highest operating cable cars, offering breathtaking views of the Himalayas.",
		imageUrl:
			"https://images.unsplash.com/photo-1602434778746-b608a0d2f5f7?w=400",
		state: "Jammu and Kashmir",
	},
	{
		name: "Pahalgam",
		description:
			"A scenic town on the banks of the Lidder River, the starting point for the Amarnath Yatra.",
		imageUrl:
			"https://images.unsplash.com/photo-1625349581423-38add1424b9a?w=400",
		state: "Jammu and Kashmir",
	},
	{
		name: "Vaishno Devi Temple, Katra",
		description:
			"A highly revered Hindu temple dedicated to the goddess Vaishno Devi, located in the Trikuta Mountains.",
		imageUrl:
			"https://images.unsplash.com/photo-1627885458203-42e779a52e9a?w=400",
		state: "Jammu and Kashmir",
	},
	{
		name: "Sonamarg",
		description:
			"The 'Meadow of Gold', known for its stunning landscapes, glaciers, and as a base for treks.",
		imageUrl:
			"https://images.unsplash.com/photo-1618319983962-d343467f433f?w=400",
		state: "Jammu and Kashmir",
	},

	// Jharkhand
	{
		name: "Dassam Falls",
		description:
			"A spectacular waterfall where the Kanchi River cascades down from a height of 144 feet.",
		imageUrl:
			"https://images.unsplash.com/photo-1631557991958-3d8e5f2a1a0c?w=400",
		state: "Jharkhand",
	},
	{
		name: "Parasnath Hills",
		description:
			"A major Jain pilgrimage center with temples atop the highest peak in Jharkhand.",
		imageUrl:
			"https://images.unsplash.com/photo-1627814144907-712f677d2427?w=400",
		state: "Jharkhand",
	},
	{
		name: "Baidyanath Jyotirlinga Temple, Deoghar",
		description:
			"One of the twelve Jyotirlingas, a highly revered pilgrimage site for Hindus.",
		imageUrl:
			"https://images.unsplash.com/photo-1617653241527-94d33446de6a?w=400",
		state: "Jharkhand",
	},
	{
		name: "Betla National Park",
		description:
			"A diverse national park known for its population of tigers, elephants, and other wildlife.",
		imageUrl:
			"https://images.unsplash.com/photo-1582234201258-08aad84140d3?w=400",
		state: "Jharkhand",
	},
	{
		name: "Hundru Falls",
		description:
			"One of the most picturesque waterfalls in the region, created by the Subarnarekha River.",
		imageUrl:
			"https://images.unsplash.com/photo-1620451433282-3536254c74a3?w=400",
		state: "Jharkhand",
	},

	// Karnataka
	{
		name: "Hampi",
		description:
			"A UNESCO World Heritage site with captivating ruins of the Vijayanagara Empire.",
		imageUrl:
			"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400",
		state: "Karnataka",
	},
	{
		name: "Mysore Palace",
		description:
			"A grand historical palace, the former seat of the Wodeyar dynasty, known for its stunning architecture.",
		imageUrl:
			"https://images.unsplash.com/photo-1563725899539-7389478f654b?w=400",
		state: "Karnataka",
	},
	{
		name: "Coorg (Kodagu)",
		description:
			"A lush hill station famous for its coffee plantations, mist-covered hills, and serene landscapes.",
		imageUrl:
			"https://images.unsplash.com/photo-1602881917445-9b1e4c8c7f2a?w=400",
		state: "Karnataka",
	},
	{
		name: "Gokarna",
		description:
			"A coastal town known for its pristine beaches and important Hindu pilgrimage sites.",
		imageUrl:
			"https://images.unsplash.com/photo-1605313410078-834ad95d1f88?w=400",
		state: "Karnataka",
	},
	{
		name: "Jog Falls",
		description:
			"India's second-highest plunge waterfall, a spectacular sight during the monsoon season.",
		imageUrl:
			"https://images.unsplash.com/photo-1626227650588-43801262db66?w=400",
		state: "Karnataka",
	},

	// Kerala
	{
		name: "Alleppey (Alappuzha) Backwaters",
		description:
			"Experience serene houseboat cruises through a network of tranquil canals and lakes.",
		imageUrl:
			"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400",
		state: "Kerala",
	},
	{
		name: "Munnar",
		description:
			"A breathtaking hill station famous for its sprawling tea plantations and lush greenery.",
		imageUrl:
			"https://images.unsplash.com/photo-1582234201258-08aad84140d3?w=400",
		state: "Kerala",
	},
	{
		name: "Thekkady (Periyar National Park)",
		description:
			"A wildlife sanctuary known for its elephants, tigers, and aromatic spice plantations.",
		imageUrl:
			"https://images.unsplash.com/photo-1601835925249-c1e1a53381e4?w=400",
		state: "Kerala",
	},
	{
		name: "Varkala Beach",
		description:
			"A stunning beach known for its dramatic red cliffs adjacent to the Arabian Sea.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Kerala",
	},
	{
		name: "Kovalam Beach",
		description:
			"An internationally renowned beach with three adjacent crescent-shaped beaches.",
		imageUrl:
			"https://images.unsplash.com/photo-1590379912648-a027e0242517?w=400",
		state: "Kerala",
	},

	// Lakshadweep
	{
		name: "Agatti Island",
		description:
			"The gateway to Lakshadweep, known for its stunning lagoon, coral reefs, and water sports.",
		imageUrl:
			"https://images.unsplash.com/photo-1604430480931-50798a3b5a77?w=400",
		state: "Lakshadweep",
	},
	{
		name: "Bangaram Atoll",
		description:
			"An uninhabited atoll with pristine beaches, clear turquoise waters, and vibrant marine life.",
		imageUrl:
			"https://images.unsplash.com/photo-1610967882585-709d421b4a3c?w=400",
		state: "Lakshadweep",
	},
	{
		name: "Minicoy Island",
		description:
			"The southernmost island, known for its unique culture, tuna canning factory, and tall lighthouse.",
		imageUrl:
			"https://images.unsplash.com/photo-1600255941913-5614556c1699?w=400",
		state: "Lakshadweep",
	},
	{
		name: "Kavaratti Island",
		description:
			"The capital of Lakshadweep, famous for its beautiful mosques and sandy beaches.",
		imageUrl:
			"https://images.unsplash.com/photo-1599661046827-dac2a412cd16?w=400",
		state: "Lakshadweep",
	},
	{
		name: "Kadmat Island",
		description:
			"A long, narrow island known for its large lagoon, making it perfect for kayaking and snorkeling.",
		imageUrl:
			"https://images.unsplash.com/photo-1603787492367-983907a33162?w=400",
		state: "Lakshadweep",
	},

	// Madhya Pradesh
	{
		name: "Khajuraho Group of Monuments",
		description:
			"Famous for stunning temples adorned with intricate and erotic sculptures.",
		imageUrl:
			"https://images.unsplash.com/photo-1582234201258-08aad84140d3?w=400",
		state: "Madhya Pradesh",
	},
	{
		name: "Bandhavgarh National Park",
		description:
			"Renowned for having one of the highest densities of Bengal tigers in the world.",
		imageUrl:
			"https://images.unsplash.com/photo-1601835925249-c1e1a53381e4?w=400",
		state: "Madhya Pradesh",
	},
	{
		name: "Sanchi Stupa",
		description:
			"A great Buddhist stupa, one of the oldest stone structures in India, commissioned by Emperor Ashoka.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Madhya Pradesh",
	},
	{
		name: "Gwalior Fort",
		description:
			"An imposing hill fort that has been the scene of many historical events.",
		imageUrl:
			"https://images.unsplash.com/photo-1605313410078-834ad95d1f88?w=400",
		state: "Madhya Pradesh",
	},
	{
		name: "Dhuandhar Falls, Jabalpur",
		description:
			"A powerful waterfall on the Narmada River where the water plunges down creating a misty effect.",
		imageUrl:
			"https://images.unsplash.com/photo-1620451433282-3536254c74a3?w=400",
		state: "Madhya Pradesh",
	},

	// Maharashtra
	{
		name: "Gateway of India, Mumbai",
		description:
			"An iconic arch-monument overlooking the Arabian Sea, built during the British Raj.",
		imageUrl: "https://images.unsplash.com/photo-1562227931-291d643730e4?w=400",
		state: "Maharashtra",
	},
	{
		name: "Ajanta and Ellora Caves",
		description:
			"UNESCO World Heritage sites featuring magnificent rock-cut caves, paintings, and sculptures.",
		imageUrl:
			"https://images.unsplash.com/photo-1599901413152-412678d8a313?w=400",
		state: "Maharashtra",
	},
	{
		name: "Shirdi",
		description:
			"A holy town and major pilgrimage site, home to the shrine of the revered saint, Sai Baba.",
		imageUrl:
			"https://images.unsplash.com/photo-1617653241527-94d33446de6a?w=400",
		state: "Maharashtra",
	},
	{
		name: "Lonavala",
		description:
			"A popular hill station known for its scenic beauty, waterfalls, and historic forts.",
		imageUrl:
			"https://images.unsplash.com/photo-1602881917445-9b1e4c8c7f2a?w=400",
		state: "Maharashtra",
	},
	{
		name: "Marine Drive, Mumbai",
		description:
			"A picturesque C-shaped boulevard along the coast, also known as the 'Queen's Necklace'.",
		imageUrl:
			"https://images.unsplash.com/photo-1579549359333-cb64c7816a7e?w=400",
		state: "Maharashtra",
	},

	// Manipur
	{
		name: "Loktak Lake",
		description:
			"The largest freshwater lake in Northeast India, famous for its floating phumdis.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Manipur",
	},
	{
		name: "Keibul Lamjao National Park",
		description:
			"The world's only floating national park, home to the endangered Sangai deer.",
		imageUrl:
			"https://images.unsplash.com/photo-1582234201258-08aad84140d3?w=400",
		state: "Manipur",
	},
	{
		name: "Ima Keithel (Mother's Market)",
		description:
			"A historic market in Imphal run exclusively by women, offering a variety of local products.",
		imageUrl:
			"https://images.unsplash.com/photo-1618319983962-d343467f433f?w=400",
		state: "Manipur",
	},
	{
		name: "Kangla Fort",
		description:
			"A historic fort and the ancient capital of Manipur, showcasing rich history and culture.",
		imageUrl:
			"https://images.unsplash.com/photo-1627814144907-712f677d2427?w=400",
		state: "Manipur",
	},
	{
		name: "Dzukou Valley",
		description:
			"A stunning valley on the border of Manipur and Nagaland, famous for its seasonal flowers.",
		imageUrl:
			"https://images.unsplash.com/photo-1606560195286-8a0357d45e05?w=400",
		state: "Manipur",
	},

	// Meghalaya
	{
		name: "Living Root Bridges, Cherrapunji",
		description:
			"Unique bridges handmade by weaving the aerial roots of Ficus elastica trees.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Meghalaya",
	},
	{
		name: "Dawki River (Umngot River)",
		description:
			"Famous for its crystal clear water, giving the impression that boats are floating in mid-air.",
		imageUrl:
			"https://images.unsplash.com/photo-1605549119932-5178af315b23?w=400",
		state: "Meghalaya",
	},
	{
		name: "Mawlynnong Village",
		description:
			"Famed as 'Asia's Cleanest Village', offering a glimpse into sustainable living.",
		imageUrl:
			"https://images.unsplash.com/photo-1618319983962-d343467f433f?w=400",
		state: "Meghalaya",
	},
	{
		name: "Nohkalikai Falls",
		description:
			"India's tallest plunge waterfall, cascading down into a turquoise-green pool.",
		imageUrl:
			"https://images.unsplash.com/photo-1620451433282-3536254c74a3?w=400",
		state: "Meghalaya",
	},
	{
		name: "Mawsmai Cave",
		description:
			"A well-lit network of limestone caves, offering an adventurous spelunking experience.",
		imageUrl:
			"https://images.unsplash.com/photo-1628364137933-398579325996?w=400",
		state: "Meghalaya",
	},

	// Mizoram
	{
		name: "Vantawng Falls",
		description:
			"The highest waterfall in Mizoram, surrounded by lush green bamboo forests.",
		imageUrl:
			"https://images.unsplash.com/photo-1631557991958-3d8e5f2a1a0c?w=400",
		state: "Mizoram",
	},
	{
		name: "Reiek Tlang (Reiek Peak)",
		description:
			"A beautiful peak offering panoramic views of the surrounding valleys and Aizawl city.",
		imageUrl:
			"https://images.unsplash.com/photo-1625349581423-38add1424b9a?w=400",
		state: "Mizoram",
	},
	{
		name: "Phawngpui (Blue Mountain)",
		description:
			"The highest peak in Mizoram, considered the abode of the gods and rich in biodiversity.",
		imageUrl:
			"https://images.unsplash.com/photo-1606560195286-8a0357d45e05?w=400",
		state: "Mizoram",
	},
	{
		name: "Durtlang Hills",
		description:
			"A set of scenic hills offering a breathtaking panoramic view of Aizawl city.",
		imageUrl:
			"https://images.unsplash.com/photo-1618319983962-d343467f433f?w=400",
		state: "Mizoram",
	},
	{
		name: "Palak Dil (Palak Lake)",
		description:
			"The largest lake in Mizoram, a biodiversity hotspot surrounded by lush forests.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Mizoram",
	},

	// Nagaland
	{
		name: "Dzukou Valley",
		description:
			"A breathtaking valley of flowers, offering one of the most scenic treks in Northeast India.",
		imageUrl:
			"https://images.unsplash.com/photo-1606560195286-8a0357d45e05?w=400",
		state: "Nagaland",
	},
	{
		name: "Kohima War Cemetery",
		description:
			"A memorial dedicated to the soldiers of the 2nd British Division who died in WWII.",
		imageUrl:
			"https://images.unsplash.com/photo-1627885458203-42e779a52e9a?w=400",
		state: "Nagaland",
	},
	{
		name: "Kisama Heritage Village",
		description:
			"The venue for the Hornbill Festival, showcasing the culture of Naga tribes.",
		imageUrl:
			"https://images.unsplash.com/photo-1618319983962-d343467f433f?w=400",
		state: "Nagaland",
	},
	{
		name: "Khonoma Green Village",
		description:
			"India's first green village, known for its conservation efforts and terraced fields.",
		imageUrl:
			"https://images.unsplash.com/photo-1625349581423-38add1424b9a?w=400",
		state: "Nagaland",
	},
	{
		name: "Mokokchung",
		description:
			"The cultural heartland of the Ao Naga tribe, a vibrant town with scenic landscapes.",
		imageUrl:
			"https://images.unsplash.com/photo-1605549119932-5178af315b23?w=400",
		state: "Nagaland",
	},

	// Odisha
	{
		name: "Konark Sun Temple",
		description:
			"A UNESCO World Heritage site, a 13th-century temple shaped like a colossal chariot.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Odisha",
	},
	{
		name: "Jagannath Temple, Puri",
		description:
			"A major Hindu pilgrimage destination and one of the Char Dham sites, famous for its Rath Yatra.",
		imageUrl:
			"https://images.unsplash.com/photo-1617653241527-94d33446de6a?w=400",
		state: "Odisha",
	},
	{
		name: "Puri Beach",
		description:
			"A popular beach on the Bay of Bengal, known for its golden sands and religious significance.",
		imageUrl:
			"https://images.unsplash.com/photo-1590379912648-a027e0242517?w=400",
		state: "Odisha",
	},
	{
		name: "Chilika Lake",
		description:
			"Asia's largest brackish water lagoon, a paradise for birdwatchers and home to Irrawaddy dolphins.",
		imageUrl:
			"https://images.unsplash.com/photo-1605549119932-5178af315b23?w=400",
		state: "Odisha",
	},
	{
		name: "Udayagiri and Khandagiri Caves",
		description:
			"Ancient rock-cut caves with ornate carvings, built as residences for Jain monks.",
		imageUrl:
			"https://images.unsplash.com/photo-1628364137933-398579325996?w=400",
		state: "Odisha",
	},

	// Puducherry
	{
		name: "Promenade Beach (Rock Beach)",
		description:
			"A popular stretch of beachfront known for its charming walkway and colonial landmarks.",
		imageUrl:
			"https://images.unsplash.com/photo-1590379912648-a027e0242517?w=400",
		state: "Puducherry",
	},
	{
		name: "Auroville",
		description:
			"An experimental township dedicated to human unity, with the iconic Matrimandir at its center.",
		imageUrl:
			"https://images.unsplash.com/photo-1595287513840-272e6169e6a2?w=400",
		state: "Puducherry",
	},
	{
		name: "French Quarter (White Town)",
		description:
			"A quaint part of the city with colonial-era villas, tree-lined streets, and chic boutiques.",
		imageUrl:
			"https://images.unsplash.com/photo-1599661046827-dac2a412cd16?w=400",
		state: "Puducherry",
	},
	{
		name: "Aurobindo Ashram",
		description:
			"A spiritual community founded by Sri Aurobindo, attracting followers from all over the world.",
		imageUrl:
			"https://images.unsplash.com/photo-1617653241527-94d33446de6a?w=400",
		state: "Puducherry",
	},
	{
		name: "Paradise Beach (Plage Paradiso)",
		description:
			"A serene beach accessible by boat, known for its golden sands and clear waters.",
		imageUrl:
			"https://images.unsplash.com/photo-1600255941913-5614556c1699?w=400",
		state: "Puducherry",
	},

	// Punjab
	{
		name: "Golden Temple (Harmandir Sahib)",
		description:
			"The holiest gurdwara of Sikhism, an iconic spiritual and cultural center in Amritsar.",
		imageUrl:
			"https://images.unsplash.com/photo-1609920958934-08a6c831b0a3?w=400",
		state: "Punjab",
	},
	{
		name: "Wagah Border",
		description:
			"The site of the daily border-closing ceremony near Amritsar, a display of military pageantry.",
		imageUrl:
			"https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
		state: "Punjab",
	},
	{
		name: "Jallianwala Bagh",
		description:
			"A public garden in Amritsar housing a memorial of national importance to commemorate a tragic massacre.",
		imageUrl:
			"https://images.unsplash.com/photo-1627814144907-712f677d2427?w=400",
		state: "Punjab",
	},
	{
		name: "Virasat-e-Khalsa",
		description:
			"A museum of Sikhism in Anandpur Sahib, showcasing the rich history and culture of the Khalsa.",
		imageUrl:
			"https://images.unsplash.com/photo-1631557991919-4e5a31a90c68?w=400",
		state: "Punjab",
	},
	{
		name: "Qila Mubarak, Patiala",
		description:
			"A rare and outstanding example of Sikh Palace architecture in India.",
		imageUrl:
			"https://images.unsplash.com/photo-1605313410078-834ad95d1f88?w=400",
		state: "Punjab",
	},

	// Rajasthan
	{
		name: "Hawa Mahal",
		description:
			"The iconic 'Palace of Winds' in Jaipur, a stunning five-story pink sandstone facade.",
		imageUrl:
			"https://images.unsplash.com/photo-1599661046827-dac2a412cd16?w=400",
		state: "Rajasthan",
	},
	{
		name: "Mehrangarh Fort",
		description:
			"A majestic fort overlooking the blue city of Jodhpur, offering breathtaking views.",
		imageUrl:
			"https://images.unsplash.com/photo-1603787492367-983907a33162?w=400",
		state: "Rajasthan",
	},
	{
		name: "Udaipur City Palace",
		description:
			"A grand palace complex on Lake Pichola, showcasing Rajasthani and Mughal architecture.",
		imageUrl:
			"https://images.unsplash.com/photo-1579549359333-cb64c7816a7e?w=400",
		state: "Rajasthan",
	},
	{
		name: "Jaisalmer Fort",
		description:
			"A massive sandcastle-like 'living fort' with homes and businesses within its walls.",
		imageUrl:
			"https://images.unsplash.com/photo-1588821971758-e9f909994511?w=400",
		state: "Rajasthan",
	},
	{
		name: "Ranthambore National Park",
		description:
			"One of the best places in India to spot Royal Bengal tigers in their natural habitat.",
		imageUrl:
			"https://images.unsplash.com/photo-1601835925249-c1e1a53381e4?w=400",
		state: "Rajasthan",
	},

	// Sikkim
	{
		name: "Tsomgo Lake (Changu Lake)",
		description:
			"A high-altitude glacial lake, known for its stunning beauty and changing colors.",
		imageUrl:
			"https://images.unsplash.com/photo-1606560195286-8a0357d45e05?w=400",
		state: "Sikkim",
	},
	{
		name: "Nathula Pass",
		description:
			"A high-altitude mountain pass on the Indo-China border, offering breathtaking views.",
		imageUrl:
			"https://images.unsplash.com/photo-1627885458203-42e779a52e9a?w=400",
		state: "Sikkim",
	},
	{
		name: "Gurudongmar Lake",
		description:
			"One of the highest lakes in the world, considered sacred by Buddhists and Sikhs.",
		imageUrl:
			"https://images.unsplash.com/photo-1625349581423-38add1424b9a?w=400",
		state: "Sikkim",
	},
	{
		name: "Rumtek Monastery",
		description:
			"The largest monastery in Sikkim, a significant center of Tibetan Buddhism near Gangtok.",
		imageUrl:
			"https://images.unsplash.com/photo-1593495861183-524419523f46?w=400",
		state: "Sikkim",
	},
	{
		name: "Pelling",
		description:
			"A small town offering magnificent views of the Kanchenjunga mountain range.",
		imageUrl:
			"https://images.unsplash.com/photo-1605549119932-5178af315b23?w=400",
		state: "Sikkim",
	},

	// Tamil Nadu
	{
		name: "Meenakshi Amman Temple",
		description:
			"A historic Hindu temple in Madurai with towering gopurams covered in vibrant figures.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Tamil Nadu",
	},
	{
		name: "Marina Beach",
		description:
			"One of the longest urban beaches in the world, a bustling hub of activity in Chennai.",
		imageUrl:
			"https://images.unsplash.com/photo-1590379912648-a027e0242517?w=400",
		state: "Tamil Nadu",
	},
	{
		name: "Ooty (Udhagamandalam)",
		description:
			"The 'Queen of Hill Stations', known for its tea gardens, lakes, and colonial charm.",
		imageUrl:
			"https://images.unsplash.com/photo-1582234201258-08aad84140d3?w=400",
		state: "Tamil Nadu",
	},
	{
		name: "Ramanathaswamy Temple, Rameswaram",
		description:
			"A holy island town, one of the Char Dham pilgrimage sites, known for its long corridors.",
		imageUrl:
			"https://images.unsplash.com/photo-1617653241527-94d33446de6a?w=400",
		state: "Tamil Nadu",
	},
	{
		name: "Mahabalipuram (Mamallapuram)",
		description:
			"A UNESCO World Heritage site with ancient rock-cut temples, mandapas, and the Shore Temple.",
		imageUrl:
			"https://images.unsplash.com/photo-1605313410078-834ad95d1f88?w=400",
		state: "Tamil Nadu",
	},

	// Telangana
	{
		name: "Charminar",
		description:
			"An iconic 16th-century mosque and monument with four grand arches in Hyderabad.",
		imageUrl:
			"https://images.unsplash.com/photo-1594770972224-7104a39b36d6?w=400",
		state: "Telangana",
	},
	{
		name: "Golkonda Fort",
		description:
			"A fortified citadel near Hyderabad, known for its acoustics and impressive architecture.",
		imageUrl:
			"https://images.unsplash.com/photo-1605313410078-834ad95d1f88?w=400",
		state: "Telangana",
	},
	{
		name: "Ramoji Film City",
		description:
			"The world's largest integrated film city, a popular tourism and recreation center.",
		imageUrl:
			"https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
		state: "Telangana",
	},
	{
		name: "Hussain Sagar Lake",
		description:
			"A heart-shaped lake in Hyderabad with a large monolithic statue of Gautama Buddha in the middle.",
		imageUrl:
			"https://images.unsplash.com/photo-1627885458145-8f6b0f9c2c6a?w=400",
		state: "Telangana",
	},
	{
		name: "Warangal Fort",
		description:
			"An impressive fort with massive stone gateways (Kakatiya Kala Thoranam) and historic ruins.",
		imageUrl:
			"https://images.unsplash.com/photo-1627814144907-712f677d2427?w=400",
		state: "Telangana",
	},

	// Tripura
	{
		name: "Ujjayanta Palace",
		description:
			"A magnificent former royal palace in Agartala, now a state museum.",
		imageUrl:
			"https://images.unsplash.com/photo-1631557991919-4e5a31a90c68?w=400",
		state: "Tripura",
	},
	{
		name: "Neermahal",
		description:
			"The 'Lake Palace of Tripura', a stunning royal palace in the middle of Rudrasagar Lake.",
		imageUrl:
			"https://images.unsplash.com/photo-1627814144907-712f677d2427?w=400",
		state: "Tripura",
	},
	{
		name: "Unakoti",
		description:
			"An ancient Shaivite pilgrimage site with huge rock-cut carvings of Shiva.",
		imageUrl:
			"https://images.unsplash.com/photo-1628364137933-398579325996?w=400",
		state: "Tripura",
	},
	{
		name: "Tripura Sundari Temple",
		description:
			"One of the 51 Shakti Peethas, a highly revered Hindu temple in the ancient city of Udaipur.",
		imageUrl:
			"https://images.unsplash.com/photo-1617653241527-94d33446de6a?w=400",
		state: "Tripura",
	},
	{
		name: "Jampui Hills",
		description:
			"Known as the 'eternal hills of spring', famous for its scenic landscapes and orange cultivation.",
		imageUrl:
			"https://images.unsplash.com/photo-1625349581423-38add1424b9a?w=400",
		state: "Tripura",
	},

	// Uttar Pradesh
	{
		name: "Taj Mahal",
		description:
			"An ivory-white marble mausoleum in Agra, a symbol of eternal love and a wonder of the world.",
		imageUrl:
			"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400",
		state: "Uttar Pradesh",
	},
	{
		name: "Varanasi Ghats",
		description:
			"A series of sacred riverfront steps leading to the banks of the River Ganges.",
		imageUrl: "https://images.unsplash.com/photo-1561361533-ebb46a782440?w=400",
		state: "Uttar Pradesh",
	},
	{
		name: "Agra Fort",
		description:
			"A historical fort that was the main residence of the emperors of the Mughal Dynasty.",
		imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400",
		state: "Uttar Pradesh",
	},
	{
		name: "Fatehpur Sikri",
		description:
			"A magnificent fortified ancient city, the short-lived capital of the Mughal empire.",
		imageUrl:
			"https://images.unsplash.com/photo-1599901413152-412678d8a313?w=400",
		state: "Uttar Pradesh",
	},
	{
		name: "Sarnath",
		description:
			"The place where Gautama Buddha first taught the Dharma, a major Buddhist pilgrimage site.",
		imageUrl:
			"https://images.unsplash.com/photo-1595287513840-272e6169e6a2?w=400",
		state: "Uttar Pradesh",
	},

	// Uttarakhand
	{
		name: "Rishikesh",
		description:
			"The 'Yoga Capital of the World', known for ashrams and adventure sports on the Ganges.",
		imageUrl:
			"https://images.unsplash.com/photo-1593495861183-524419523f46?w=400",
		state: "Uttarakhand",
	},
	{
		name: "Nainital",
		description:
			"A popular hill station built around a pear-shaped lake, surrounded by mountains.",
		imageUrl:
			"https://images.unsplash.com/photo-1591017403233-fd8b6c8e3e44?w=400",
		state: "Uttarakhand",
	},
	{
		name: "Jim Corbett National Park",
		description:
			"India's oldest national park, known for its rich biodiversity and Bengal tigers.",
		imageUrl:
			"https://images.unsplash.com/photo-1601835925249-c1e1a53381e4?w=400",
		state: "Uttarakhand",
	},
	{
		name: "Valley of Flowers National Park",
		description:
			"A high-altitude valley with meadows of endemic alpine flowers.",
		imageUrl:
			"https://images.unsplash.com/photo-1606560195286-8a0357d45e05?w=400",
		state: "Uttarakhand",
	},
	{
		name: "Badrinath Temple",
		description:
			"One of the four Char Dham pilgrimage sites, a holy shrine dedicated to Lord Vishnu.",
		imageUrl:
			"https://images.unsplash.com/photo-1627885458203-42e779a52e9a?w=400",
		state: "Uttarakhand",
	},

	// West Bengal
	{
		name: "Victoria Memorial",
		description:
			"A grand marble building in Kolkata, now a museum dedicated to the memory of Queen Victoria.",
		imageUrl:
			"https://images.unsplash.com/photo-1524293111463-2336342d71d3?w=400",
		state: "West Bengal",
	},
	{
		name: "Sundarbans National Park",
		description:
			"The largest mangrove forest in the world, a UNESCO site and home to the Royal Bengal Tiger.",
		imageUrl:
			"https://images.unsplash.com/photo-1582234201258-08aad84140d3?w=400",
		state: "West Bengal",
	},
	{
		name: "Darjeeling Himalayan Railway (Toy Train)",
		description:
			"A UNESCO World Heritage site, a narrow-gauge railway offering scenic mountain views.",
		imageUrl:
			"https://images.unsplash.com/photo-1605549119932-5178af315b23?w=400",
		state: "West Bengal",
	},
	{
		name: "Howrah Bridge",
		description:
			"An iconic cantilever bridge over the Hooghly River, one of the busiest in the world.",
		imageUrl:
			"https://images.unsplash.com/photo-1579549359333-cb64c7816a7e?w=400",
		state: "West Bengal",
	},
	{
		name: "Kalighat Temple",
		description:
			"One of the 51 Shakti Peethas in Kolkata, a revered Hindu temple dedicated to the goddess Kali.",
		imageUrl:
			"https://images.unsplash.com/photo-1617653241527-94d33446de6a?w=400",
		state: "West Bengal",
	},
]
async function seed() {
	const client = await db.connect()
	console.log("Seeding database...")

	// First, create the table if it doesn't already exist
	await client.sql`
    CREATE TABLE IF NOT EXISTS tourist_spots (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      description TEXT,
      image_url TEXT NOT NULL,
      state VARCHAR(256) NOT NULL
    );
  `

	// Then, insert the data
	for (const spot of spotsToSeed) {
		// ON CONFLICT DO NOTHING prevents errors if you run the script multiple times
		await client.sql`
      INSERT INTO tourist_spots (name, description, image_url, state)
      VALUES (${spot.name}, ${spot.description}, ${spot.imageUrl}, ${spot.state})
      ON CONFLICT (id) DO NOTHING;
    `
	}

	console.log("Seeding complete!")
}

seed().catch((err) => {
	console.error("An error occurred during seeding:", err)
	process.exit(1)
})
