const fishes = [
    {
        "local_name": "areolated-cod",
        "scientific_name": "Epinephelus sp.",
        "seasonal_availability": "August to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/cephalopods/cuttlefish.png"
    },
    {
        "local_name": "gaint-sea-pike",
        "scientific_name": "Sphyraena jello",
        "seasonal_availability": "September to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/gaint-sea-pike.png"
    },
    {
        "local_name": "big-eye-tuna",
        "scientific_name": "Thunnus obesus",
        "seasonal_availability": "October to January",
        "catch_limit": "42,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/big-eye-tuna.png"
    },
    {
        "local_name": "black-banded-trevally",
        "scientific_name": "Seriolina nigrofasciata",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/black-banded-trevally.png"
    },
    {
        "local_name": "black-king-fish",
        "scientific_name": "Rachycentron canadus",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/black-king-fish.png"
    },
    {
        "local_name": "black-pomfret",
        "scientific_name": "Parastromateus niger",
        "seasonal_availability": "August to December",
        "catch_limit": "50,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/black-pomfret.png"
    },
    {
        "local_name": "black-spot-snapper",
        "scientific_name": "Lutjanus fulviflamus",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/black-spot-snapper.png"
    },
    {
        "local_name": "black-tip-shark",
        "scientific_name": "Eulamia spallanzani",
        "seasonal_availability": "September to April",
        "catch_limit": "4,000",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/black-tip-shark.png"
    },
    {
        "local_name": "blood-clam",
        "scientific_name": "Anadara granosa",
        "seasonal_availability": "July to October",
        "catch_limit": "85,000",
        "category": "bivalves",
        "image_url": "/images/fishes/bivalves/blood-clam.png"
    },
    {
        "local_name": "blood-red-snapper",
        "scientific_name": "Lutjanus sanguineus",
        "seasonal_availability": "September to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/blood-red-snapper.png"
    },
    {
        "local_name": "blotched-croaker",
        "scientific_name": "Nibea maculata",
        "seasonal_availability": "October to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/blotched-croaker.png"
    },
    {
        "local_name": "blue-spot-grey-mullet",
        "scientific_name": "Valamugil seheli",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/blue-spot-grey-mullet.png"
    },
    {
        "local_name": "bombay-duck",
        "scientific_name": "Harpodon nehereus",
        "seasonal_availability": "September to June",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/bombay-duck.png"
    },
    {
        "local_name": "brown-shrimp",
        "scientific_name": "Metapenaeus monoceros",
        "seasonal_availability": "November to May",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/brown-shrimp.png"
    },
    {
        "local_name": "cat-fish",
        "scientific_name": "Arius maculatus",
        "seasonal_availability": "September to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/cat-fish.png"
    },
    {
        "local_name": "catla",
        "scientific_name": "Hamilton (Catla Catla)",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "freshwater-fish",
        "image_url": "/images/fishes/freshwater-fish/catla.png"
    },
    {
        "local_name": "chinese-pomfret",
        "scientific_name": "Pampus chinensis",
        "seasonal_availability": "August to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/chinese-pomfret.png"
    },
    {
        "local_name": "clam",
        "scientific_name": "Meretrix meretrix",
        "seasonal_availability": "July to November",
        "catch_limit": "130,000",
        "category": "bivalves",
        "image_url": "/images/fishes/bivalves/clam.png"
    },
    {
        "local_name": "clam",
        "scientific_name": "Vellorita cyprinoides",
        "seasonal_availability": "July to November",
        "catch_limit": "130,000",
        "category": "bivalves",
        "image_url": "/images/fishes/bivalves/clam.png"
    },
    {
        "local_name": "clam",
        "scientific_name": "Katelysia opima",
        "seasonal_availability": "July to November",
        "catch_limit": "130,000",
        "category": "bivalves",
        "image_url": "/images/fishes/bivalves/clam.png"
    },
    {
        "local_name": "commerson’s-anchovy",
        "scientific_name": "Anchoviella commersoni",
        "seasonal_availability": "October to April",
        "catch_limit": "70, 000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/commerson’s-anchovy.png"
    },
    {
        "local_name": "croaker",
        "scientific_name": "Johnius sp.",
        "seasonal_availability": "October to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/croaker.png"
    },
    {
        "local_name": "croaker",
        "scientific_name": "Atrobucca nibe",
        "seasonal_availability": "October to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/croaker.png"
    },
    {
        "local_name": "croaker",
        "scientific_name": "Sciaena aneus",
        "seasonal_availability": "October to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/croaker.png"
    },
    {
        "local_name": "cuttle-fish",
        "scientific_name": "Sepia sp.",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "cephalopods",
        "image_url": "/images/fishes/cephalopods/cuttle-fish.png"
    },
    {
        "local_name": "dark-band-goat-fish",
        "scientific_name": "Upeneus tragula",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/dark-band-goat-fish.png"
    },
    {
        "local_name": "deep-bodied-sardinella",
        "scientific_name": "Sardinella brachysoma",
        "seasonal_availability": "August to December",
        "catch_limit": "20,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/deep-bodied-sardinella.png"
    },
    {
        "local_name": "deep-sea-lobster",
        "scientific_name": "Puerulus sewlii",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/deep-sea-lobster.png"
    },
    {
        "local_name": "deep-sea-shrimp",
        "scientific_name": "Solenocera sp.",
        "seasonal_availability": "February to May",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/deep-sea-shrimp.png"
    },
    {
        "local_name": "drab-croaker",
        "scientific_name": "Johnieops volgeri",
        "seasonal_availability": "October to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/drab-croaker.png"
    },
    {
        "local_name": "dusky-finned-bulleye",
        "scientific_name": "Priacanthus hamrur",
        "seasonal_availability": "August to December",
        "catch_limit": "No specific limit",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/dusky-finned-bulleye.png"
    },
    {
        "local_name": "emporer-bream",
        "scientific_name": "Lithrinus fraenatus",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/emporer-bream.png"
    },
    {
        "local_name": "emporer-red-snapper",
        "scientific_name": "Lutjanus sebae",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/emporer-red-snapper.png"
    },
    {
        "local_name": "flower-prawn",
        "scientific_name": "Penaeus semisulcatus",
        "seasonal_availability": "October to February",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/flower-prawn.png"
    },
    {
        "local_name": "fresh-water-catfish",
        "scientific_name": "Silurus wynadensis",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "freshwater-fish",
        "image_url": "/images/fishes/freshwater-fish/fresh-water-catfish.png"
    },
    {
        "local_name": "fresh-water-eel",
        "scientific_name": "Anguilla bicolor",
        "seasonal_availability": "September to November",
        "catch_limit": "No specific limit",
        "category": "freshwater-fish",
        "image_url": "/images/fishes/freshwater-fish/fresh-water-eel.png"
    },
    {
        "local_name": "gaint-african-snail",
        "scientific_name": "Achatina fulica",
        "seasonal_availability": "June to October",
        "catch_limit": "No specific limit",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/gaint-african-snail.png"
    },
    {
        "local_name": "gaint-marine-cat-fish",
        "scientific_name": "Arius thalassinus",
        "seasonal_availability": "March to June",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/gaint-marine-cat-fish.png"
    },
    {
        "local_name": "ghol",
        "scientific_name": "Protonibea diacanthus",
        "seasonal_availability": "August to March",
        "catch_limit": "30,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/ghol.png"
    },
    {
        "local_name": "green-mussel",
        "scientific_name": "Perna viridis",
        "seasonal_availability": "July to November",
        "catch_limit": "No specific limit",
        "category": "bivalves",
        "image_url": "/images/fishes/bivalves/green-mussel.png"
    },
    {
        "local_name": "grey-mullet",
        "scientific_name": "Mugil cephalus",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/grey-mullet.png"
    },
    {
        "local_name": "guitar-fish",
        "scientific_name": "Rhincobatus djeddensis",
        "seasonal_availability": "December to May",
        "catch_limit": "No specific limit",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/guitar-fish.png"
    },
    {
        "local_name": "hammer-head-shark",
        "scientific_name": "Shyrna zygaena",
        "seasonal_availability": "January to May",
        "catch_limit": "300",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/hammer-head-shark.png"
    },
    {
        "local_name": "hilsa",
        "scientific_name": "Tenulosa ilisha",
        "seasonal_availability": "February to May",
        "catch_limit": "30,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/hilsa.png"
    },
    {
        "local_name": "horse-mackeral",
        "scientific_name": "Megalapsis cordyla",
        "seasonal_availability": "September to November",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/horse-mackeral.png"
    },
    {
        "local_name": "indian-conger-eel",
        "scientific_name": "Conger cinereus",
        "seasonal_availability": "January to July",
        "catch_limit": "No specific limit",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/indian-conger-eel.png"
    },
    {
        "local_name": "indian-dog-shark",
        "scientific_name": "Scoliodon laticaudus",
        "seasonal_availability": "September to April",
        "catch_limit": "2,000",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/indian-dog-shark.png"
    },
    {
        "local_name": "indian-goat-fish",
        "scientific_name": "Parupeneus indicus",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/indian-goat-fish.png"
    },
    {
        "local_name": "indian-halibut",
        "scientific_name": "Psettodes erumei",
        "seasonal_availability": "July to September",
        "catch_limit": "8,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/indian-halibut.png"
    },
    {
        "local_name": "indian-mackerel",
        "scientific_name": "Rastrelliger kanagurta",
        "seasonal_availability": "August to November",
        "catch_limit": "70,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/indian-mackerel.png"
    },
    {
        "local_name": "indian-oil-sardine",
        "scientific_name": "Sardinella longiceps",
        "seasonal_availability": "August to December",
        "catch_limit": "70,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/indian-oil-sardine.png"
    },
    {
        "local_name": "indian-salmon",
        "scientific_name": "Polynemus tetradactylum",
        "seasonal_availability": "September to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/indian-salmon.png"
    },
    {
        "local_name": "japanese-thread-fin-bream",
        "scientific_name": "Nemipterus japonicus",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/japanese-thread-fin-bream.png"
    },
    {
        "local_name": "japanese-cow-ray",
        "scientific_name": "Rhinoptera javanica",
        "seasonal_availability": "January to May",
        "catch_limit": "No specific limit",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/japanese-cow-ray.png"
    },
    {
        "local_name": "jawala",
        "scientific_name": "Acetes indicus",
        "seasonal_availability": "September to March",
        "catch_limit": "30,000",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/jawala.png"
    },
    {
        "local_name": "jelly-fish",
        "scientific_name": "Rhopilema sp.",
        "seasonal_availability": "March to June",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/jelly-fish.png"
    },
    {
        "local_name": "king-prawn",
        "scientific_name": "Metapenaeus affinis",
        "seasonal_availability": "November to May",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/king-prawn.png"
    },
    {
        "local_name": "leatherjacket-fish",
        "scientific_name": "Scomberoides Iysan",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/leatherjacket-fish.png"
    },
    {
        "local_name": "little-tunny",
        "scientific_name": "Euthynnus affinis",
        "seasonal_availability": "October to May",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/little-tunny.png"
    },
    {
        "local_name": "lizard-fish",
        "scientific_name": "Saurida undosquamis",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/lizard-fish.png"
    },
    {
        "local_name": "long-spine-sea-bream",
        "scientific_name": "Argyrops spinifer",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/long-spine-sea-bream.png"
    },
    {
        "local_name": "malabar-reef-cod",
        "scientific_name": "Epinephelus malabaricus",
        "seasonal_availability": "August to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/malabar-reef-cod.png"
    },
    {
        "local_name": "malabar-trevally",
        "scientific_name": "Carangoides malabaricus",
        "seasonal_availability": "October to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/malabar-trevally.png"
    },
    {
        "local_name": "marine-shrimp",
        "scientific_name": "Paraenaeopsis stylifera",
        "seasonal_availability": "May to September",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/marine-shrimp.png"
    },
    {
        "local_name": "milk-fish",
        "scientific_name": "Chanos chanos",
        "seasonal_availability": "August to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/milk-fish.png"
    },
    {
        "local_name": "mud-crab",
        "scientific_name": "Scylla serrata",
        "seasonal_availability": "July to October",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/mud-crab.png"
    },
    {
        "local_name": "octopus",
        "scientific_name": "Octopus sp.",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "cephalopods",
        "image_url": "/images/fishes/cephalopods/octopus.png"
    },
    {
        "local_name": "oriental-bonito",
        "scientific_name": "Sarda orientails",
        "seasonal_availability": "April to May",
        "catch_limit": "10,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/oriental-bonito.png"
    },
    {
        "local_name": "oyster",
        "scientific_name": "Crassostrea madrasensis",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/oyster.png"
    },
    {
        "local_name": "parrot-fish",
        "scientific_name": "Scarus russelli",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/parrot-fish.png"
    },
    {
        "local_name": "pearl-oyster",
        "scientific_name": "Pinctada sp.",
        "seasonal_availability": "September to May",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/pearl-oyster.png"
    },
    {
        "local_name": "pearl-spot",
        "scientific_name": "Etroplus suratensis",
        "seasonal_availability": "May to November",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/pearl-spot.png"
    },
    {
        "local_name": "pink-shrimp",
        "scientific_name": "Metapenaeus dobsoni",
        "seasonal_availability": "July to October",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/pink-shrimp.png"
    },
    {
        "local_name": "reef-cod",
        "scientific_name": "Epinephelus sp.",
        "seasonal_availability": "August to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/reef-cod.png"
    },
    {
        "local_name": "reef-cod",
        "scientific_name": "Epinephelus sp.",
        "seasonal_availability": "August to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/reef-cod.png"
    },
    {
        "local_name": "ribbon-fish",
        "scientific_name": "Lepturacanthus savala",
        "seasonal_availability": "July to April",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/ribbon-fish.png"
    },
    {
        "local_name": "ribbon-fish",
        "scientific_name": "Trichiurus lepturus",
        "seasonal_availability": "July to April",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/ribbon-fish.png"
    },
    {
        "local_name": "rock-lobster",
        "scientific_name": "Panulirus ployhagus",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/rock-lobster.png"
    },
    {
        "local_name": "rock-lobster",
        "scientific_name": "Panulirus homarus",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/rock-lobster.png"
    },
    {
        "local_name": "rock-lobster",
        "scientific_name": "Panulirus orantus",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/rock-lobster.png"
    },
    {
        "local_name": "sand-lobster",
        "scientific_name": "Thenus orientails",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/sand-lobster.png"
    },
    {
        "local_name": "scad",
        "scientific_name": "Alepes mate",
        "seasonal_availability": "January to June",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/scad.png"
    },
    {
        "local_name": "scampi",
        "scientific_name": "Macrobrachium rosenbergii",
        "seasonal_availability": "September to November",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/scampi.png"
    },
    {
        "local_name": "sea-bass",
        "scientific_name": "Lates calcarifer",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/sea-bass.png"
    },
    {
        "local_name": "sea-crab",
        "scientific_name": "Portunus sanguinolentus",
        "seasonal_availability": "July to December",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/sea-crab.png"
    },
    {
        "local_name": "sea-crab",
        "scientific_name": "Portunus pelagicus",
        "seasonal_availability": "July to December",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/sea-crab.png"
    },
    {
        "local_name": "sea-crab",
        "scientific_name": "Charybdis cruciata",
        "seasonal_availability": "July to December",
        "catch_limit": "No specific limit",
        "category": "crabs-and-lobster",
        "image_url": "/images/fishes/crabs-and-lobster/sea-crab.png"
    },
    {
        "local_name": "seer-fish-spanish-mackeral",
        "scientific_name": "Scomberomorus commerson",
        "seasonal_availability": "October to December",
        "catch_limit": "6,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/seer-fish-spanish-mackeral.png"
    },
    {
        "local_name": "seer-fish-spotted-spanish-mackeral",
        "scientific_name": "Scomberomorus guttatus",
        "seasonal_availability": "October to December",
        "catch_limit": "6,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/seer-fish-spotted-spanish-mackeral.png"
    },
    {
        "local_name": "seer-fish-streaked-spanish-mackeral",
        "scientific_name": "Scomberomorus lineolatus",
        "seasonal_availability": "October to December",
        "catch_limit": "6,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/seer-fish-streaked-spanish-mackeral.png"
    },
    {
        "local_name": "silver-carp",
        "scientific_name": "Hypothalmichthys molitrix",
        "seasonal_availability": "January to April",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/silver-carp.png"
    },
    {
        "local_name": "silver-pomfret",
        "scientific_name": "Pampus argenteus",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/silver-pomfret.png"
    },
    {
        "local_name": "silver-sillago",
        "scientific_name": "Sillago sihama",
        "seasonal_availability": "May to December",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/silver-sillago.png"
    },
    {
        "local_name": "skipjack-tuna",
        "scientific_name": "Katsuwonus pelamis",
        "seasonal_availability": "October to May",
        "catch_limit": "52,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/skipjack-tuna.png"
    },
    {
        "local_name": "snapper",
        "scientific_name": "Lutjanus sp.",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/snapper.png"
    },
    {
        "local_name": "snapper",
        "scientific_name": "Lutjanus sp.",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/snapper.png"
    },
    {
        "local_name": "sole",
        "scientific_name": "Cynogossus macrolepidotus",
        "seasonal_availability": "July to September",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/sole.png"
    },
    {
        "local_name": "sole",
        "scientific_name": "Paraplagusia bilineata",
        "seasonal_availability": "September to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/sole.png"
    },
    {
        "local_name": "spade-fish",
        "scientific_name": "Ephippus orbis",
        "seasonal_availability": "August to January",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/spade-fish.png"
    },
    {
        "local_name": "squid",
        "scientific_name": "Loligo duvaucelii",
        "seasonal_availability": "January to March",
        "catch_limit": "No specific limit",
        "category": "cephalopods",
        "image_url": "/images/fishes/cephalopods/squid.png"
    },
    {
        "local_name": "squid",
        "scientific_name": "Doryteuthis sibogae",
        "seasonal_availability": "August to September",
        "catch_limit": "No specific limit",
        "category": "cephalopods",
        "image_url": "/images/fishes/cephalopods/squid.png"
    },
    {
        "local_name": "tiger-perch",
        "scientific_name": "Terapon jarbua",
        "seasonal_availability": "September to January",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/tiger-perch.png"
    },
    {
        "local_name": "tiger-prawn",
        "scientific_name": "Penaeus Mondon",
        "seasonal_availability": "November to May",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/tiger-prawn.png"
    },
    {
        "local_name": "tiger-toothed-croaker",
        "scientific_name": "Otolithes ruber",
        "seasonal_availability": "October to March",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/tiger-toothed-croaker.png"
    },
    {
        "local_name": "tilapia",
        "scientific_name": "Tilapia mossambica",
        "seasonal_availability": "August to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/tilapia.png"
    },
    {
        "local_name": "trevally",
        "scientific_name": "Lactarius lactarius",
        "seasonal_availability": "October to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/trevally.png"
    },
    {
        "local_name": "whelk",
        "scientific_name": "Babylonia canaliculate",
        "seasonal_availability": "January to December",
        "catch_limit": "No specific limit",
        "category": "bivalves",
        "image_url": "/images/fishes/bivalves/whelk.png"
    },
    {
        "local_name": "whip-tail-sting-ray",
        "scientific_name": "Himantura bleekeri",
        "seasonal_availability": "December to May",
        "catch_limit": "No specific limit",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/whip-tail-sting-ray.png"
    },
    {
        "local_name": "white-cheeked-shark",
        "scientific_name": "Carcharhinus dussumieri",
        "seasonal_availability": "September to April",
        "catch_limit": "4,000",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/white-cheeked-shark.png"
    },
    {
        "local_name": "white-prawn",
        "scientific_name": "none",
        "seasonal_availability": "September to May",
        "catch_limit": "No specific limit",
        "category": "shrimp-and-prawns",
        "image_url": "/images/fishes/shrimp-and-prawns/white-prawn.png"
    },
    {
        "local_name": "yellowfin-tuna",
        "scientific_name": "Thunnus albacares",
        "seasonal_availability": "October to January",
        "catch_limit": "42,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/yellowfin-tuna.png"
    },
    {
        "local_name": "dogtooth-tuna",
        "scientific_name": "Thunnus alalunga",
        "seasonal_availability": "March to May",
        "catch_limit": "10,000",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/dogtooth-tuna.png"
    },
    {
        "local_name": "swordfish",
        "scientific_name": "Xiphias gladius",
        "seasonal_availability": "April to June",
        "catch_limit": "1,000",
        "category": "shark-and-rays",
        "image_url": "/images/fishes/shark-and-rays/swordfish.png"
    },
    {
        "local_name": "pufferfish",
        "scientific_name": "Tetraodontidae family",
        "seasonal_availability": "June to September",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/pufferfish.png"
    },
    {
        "local_name": "ladyfish",
        "scientific_name": "Strongylura marina",
        "seasonal_availability": "June to September",
        "catch_limit": "No specific limit",
        "category": "other",
        "image_url": "/images/fishes/other/ladyfish.png"
    },
    {
        "local_name": "rohu",
        "scientific_name": "Labeo rohita",
        "seasonal_availability": "June to September",
        "catch_limit": "No specific limit",
        "category": "freshwater-fish",
        "image_url": "/images/fishes/freshwater-fish/rohu.png"
    },
    {
        "local_name": "kalava",
        "scientific_name": "Epinephelus coioides",
        "seasonal_availability": "December to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/kalava.png"
    },
    {
        "local_name": "kingfish",
        "scientific_name": "Seriola dumerili",
        "seasonal_availability": "April to June",
        "catch_limit": "6,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/kingfish.png"
    },
    {
        "local_name": "mackerel",
        "scientific_name": "Scomber japonicus",
        "seasonal_availability": "April to June",
        "catch_limit": "70,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/mackerel.png"
    },
    {
        "local_name": "mahi-mahi",
        "scientific_name": "Coryphaena hippurus",
        "seasonal_availability": "March to May",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/mahi-mahi.png"
    },
    {
        "local_name": "mullets",
        "scientific_name": "Various species",
        "seasonal_availability": "April to June",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/mullets.png"
    },
    {
        "local_name": "sail-fish",
        "scientific_name": "Istiophorus platypterus",
        "seasonal_availability": "March to May",
        "catch_limit": "500",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/sail-fish.png"
    },
    {
        "local_name": "sardines",
        "scientific_name": "Sardinella longiceps",
        "seasonal_availability": "February to May",
        "catch_limit": "70,000",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/sardines.png"
    },
    {
        "local_name": "sea-bass",
        "scientific_name": "Various species",
        "seasonal_availability": "April to June",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/sea-bass.png"
    },
    {
        "local_name": "dark-band-goat-fish",
        "scientific_name": "Variola louti",
        "seasonal_availability": "December to February",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/dark-band-goat-fish.png"
    },
    {
        "local_name": "leatherjacket-fish",
        "scientific_name": "Leatherjacket fish",
        "seasonal_availability": "April to June",
        "catch_limit": "No specific limit",
        "category": "bony-fish",
        "image_url": "/images/fishes/bony-fish/leatherjacket-fish.png"
    }
]

export default fishes;