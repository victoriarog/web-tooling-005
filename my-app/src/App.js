import React from "react";
import useSWR from "swr";

const LIST_ALL_BREEDS_ENDPOINT = "https://dog.ceo/api/breeds/list/all";

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

const App = () => {
  const { data } = useSWR(LIST_ALL_BREEDS_ENDPOINT, fetchJSON);

  return <div>{JSON.stringify(data)}</div>;

  // const [selectedBreed, setSelectedBreed] = useState(null);
  // if (!data) return null;
  // const listOfBreeds = Object.keys(data.message);
  // return (
  //   <div>
  //     {selectedBreed}
  //     <ul>
  //       {listOfBreeds.map((breed) => (
  //         <li>
  //           <button onClick={() => setSelectedBreed(breed)}>{breed}</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default App;


// const DATA = {
//   message: {
//     affenpinscher: [],
//     african: [],
//     airedale: [],
//     akita: [],
//     appenzeller: [],
//     australian: ["shepherd"],
//     basenji: [],
//     beagle: [],
//     bluetick: [],
//     borzoi: [],
//     bouvier: [],
//     boxer: [],
//     brabancon: [],
//     briard: [],
//     buhund: ["norwegian"],
//     bulldog: ["boston", "english", "french"],
//     bullterrier: ["staffordshire"],
//     cattledog: ["australian"],
//     chihuahua: [],
//     chow: [],
//     clumber: [],
//     cockapoo: [],
//     collie: ["border"],
//     coonhound: [],
//     corgi: ["cardigan"],
//     cotondetulear: [],
//     dachshund: [],
//     dalmatian: [],
//     dane: ["great"],
//     deerhound: ["scottish"],
//     dhole: [],
//     dingo: [],
//     doberman: [],
//     elkhound: ["norwegian"],
//     entlebucher: [],
//     eskimo: [],
//     finnish: ["lapphund"],
//     frise: ["bichon"],
//     germanshepherd: [],
//     greyhound: ["italian"],
//     groenendael: [],
//     havanese: [],
//     hound: [
//       "afghan",
//       "basset",
//       "blood",
//       "english",
//       "ibizan",
//       "plott",
//       "walker",
//     ],
//     husky: [],
//     keeshond: [],
//     kelpie: [],
//     komondor: [],
//     kuvasz: [],
//     labradoodle: [],
//     labrador: [],
//     leonberg: [],
//     lhasa: [],
//     malamute: [],
//     malinois: [],
//     maltese: [],
//     mastiff: ["bull", "english", "tibetan"],
//     mexicanhairless: [],
//     mix: [],
//     mountain: ["bernese", "swiss"],
//     newfoundland: [],
//     otterhound: [],
//     ovcharka: ["caucasian"],
//     papillon: [],
//     pekinese: [],
//     pembroke: [],
//     pinscher: ["miniature"],
//     pitbull: [],
//     pointer: ["german", "germanlonghair"],
//     pomeranian: [],
//     poodle: ["miniature", "standard", "toy"],
//     pug: [],
//     puggle: [],
//     pyrenees: [],
//     redbone: [],
//     retriever: ["chesapeake", "curly", "flatcoated", "golden"],
//     ridgeback: ["rhodesian"],
//     rottweiler: [],
//     saluki: [],
//     samoyed: [],
//     schipperke: [],
//     schnauzer: ["giant", "miniature"],
//     setter: ["english", "gordon", "irish"],
//     sheepdog: ["english", "shetland"],
//     shiba: [],
//     shihtzu: [],
//     spaniel: [
//       "blenheim",
//       "brittany",
//       "cocker",
//       "irish",
//       "japanese",
//       "sussex",
//       "welsh",
//     ],
//     springer: ["english"],
//     stbernard: [],
//     terrier: [
//       "american",
//       "australian",
//       "bedlington",
//       "border",
//       "cairn",
//       "dandie",
//       "fox",
//       "irish",
//       "kerryblue",
//       "lakeland",
//       "norfolk",
//       "norwich",
//       "patterdale",
//       "russell",
//       "scottish",
//       "sealyham",
//       "silky",
//       "tibetan",
//       "toy",
//       "welsh",
//       "westhighland",
//       "wheaten",
//       "yorkshire",
//     ],
//     tervuren: [],
//     vizsla: [],
//     waterdog: ["spanish"],
//     weimaraner: [],
//     whippet: [],
//     wolfhound: ["irish"],
//   },
//   status: "success",
// };

// const App = () => {
//   const [selectedBreed, setSelectedBreed] = useState(null);
//   const listOfBreeds = Object.keys(DATA.message);
//   return (
//     <div className="App">{listOfBreeds.map((breed) => (
//       <li>
//         <button onClick={() => setSelectedBreed(breed)}>(breed)</button>
//       </li>
//     ))}
//       </div>
//   );
// };
