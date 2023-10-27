import PrimaryTitle from "~/components/ui/primary-title";
import SingleColumnPage from "~/components/ui/SingleColumnPage";

export default function Verein() {
  return (
    <SingleColumnPage>
      <PrimaryTitle>Verein</PrimaryTitle>
      <div className="bg-white pt-12 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
        <h2 className="text-lg leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Statuten
        </h2>
        <p className="mt-4">
          Die Statuten des SHC Belpa 1107 sind öffentlich einsehbar:{" "}
          <a
            href="/media/uploads/uploads/200827_Statuten_SHC_Belpa_1107.pdf"
            className="text-red-600 hover:text-red-800"
          >
            Statuten
          </a>
        </p>
      </div>

      <div className="bg-white pt-12 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
        <h2 className="text-lg leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Vorstand
        </h2>
        <p className="mt-4">
          Der Vorstand besteht gemäss Statuten aus minimal 6 bis maximal 8
          Mitgliedern. Die Vorstandsmitglieder werden von der Hauptversammlung
          jeweils für 2 Jahre gewählt.
        </p>
        <div className="overflow-x-auto">
          <table className="mt-4 table-auto divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Funktion
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Kontakt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Alessio Faina
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Präsident
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:	praesident@shcbelpa.ch"
                  >
                    praesident@shcbelpa.ch
                  </a>{" "}
                  / +41 79 833 30 83
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Jana Heuscher
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Vizepräsidentin/Finanzen
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:finanzen@shcbelpa.ch"
                  >
                    finanzen@shcbelpa.ch
                  </a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Kevin Kiener
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Sponsoring
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:sponsoring@shcbelpa.ch"
                  >
                    sponsoring@shcbelpa.ch
                  </a>{" "}
                  / +41 79 463 37 80
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Franceso Faina
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Sponsoring/Marketing/Kommunikation
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:sponsoring@shcbelpa.ch"
                  >
                    sponsoring@shcbelpa.ch
                  </a>{" "}
                  / +41 79 833 30 87
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Dennis Nydegger
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Sportliche Leitung
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:sport@shcbelpa.ch"
                  >
                    sport@shcbelpa.ch
                  </a>{" "}
                  / +41 79 905 74 11
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Karin Schmid
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Technische Komission
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:tk@shcbelpa.ch"
                  >
                    tk@shcbelpa.ch
                  </a>{" "}
                  / +41 79 818 73 16
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Alessio Faina
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Nachwuchs
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:nachwuchs@shcbelpa.ch"
                  >
                    nachwuchs@shcbelpa.ch
                  </a>{" "}
                  / +41 79 833 30 83
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Sven Hofmann
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Marketing/Kommunikation
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:marketing@shcbelpa.ch"
                  >
                    marketing@shcbelpa.ch
                  </a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Robin Nydegger
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Material
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:material@shcbelpa.ch"
                  >
                    material@shcbelpa.ch
                  </a>{" "}
                  / +41 79 895 19 13
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Stefan Hutmacher
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Infrastruktur
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  <a
                    className="text-red-600 hover:text-red-800"
                    href="mailto:infrastruktur@shcbelpa.ch"
                  >
                    infrastruktur@shcbelpa.ch
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white pt-12 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
        <h2 className="text-lg leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Trainingsbetrieb
        </h2>
        <div className="overflow-x-auto">
          <table className="mt-4 table-auto divide-y divide-gray-200">
            <tbody>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Montag
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  18:15 - 19:45
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U15
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"></td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  19:45 - 21:30
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Damen
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Dienstag
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  18:30 - 20:00
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U18
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"></td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  19:45 - 21:30
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  NLA
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Mittwoch
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  18:15 - 19:45
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U12 + U15
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"></td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  20:00 - 21:30
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  2. Liga / Senioren
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Donnerstag
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  18:30 - 20:00
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U18
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"></td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  19:45 - 21:30
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  NLA
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Freitag
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  18:15 - 19:45
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U12
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white pt-12 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
        <h2 className="text-lg leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Headcoaches
        </h2>
        <div className="overflow-x-auto">
          <table className="mt-4 table-auto divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Funktion
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Telefonnummer
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Alessio Faina
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  NLA
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 79 833 30 83
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Martin Wägli
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  2. Liga
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 79 357 93 36
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Christoph Curchod
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U18
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 79 341 09 21
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Fabian Bohnenblust
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U18
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 77 470 73 38
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Philipp Hulliger
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U15
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 79 740 72 85
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Livia Seiderer
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U12
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 76 761 19 71
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Lea Pfister
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U9
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 79 272 99 97
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Julia Christinet
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  U9
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 78 838 18 72
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Erol Atalay
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Damen
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 79 194 14 10
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  Sven Hofmann
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  Senioren
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                  +41 79 917 15 54
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white pt-12 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
        <h2 className="text-lg leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Lizenzierung
        </h2>
        <p className="mt-4">
          Formular für den Beitritt in den SHC Belpa 1107:{" "}
          <a
            href="/docs/Beitrittsformular_SHC_Belpa_1107.pdf"
            target="_blank"
            className="text-red-600 hover:text-red-800"
          >
            Beitrittsformular
          </a>
        </p>
        <p className="mt-4">
          Formular für die Lizenzierung (Nachwuchs):{" "}
          <a
            href="/docs/Lizenzformular_Nachwuchs_Swiss_Streethockey_SHC_Belpa_1107.pdf"
            target="_blank"
            className="text-red-600 hover:text-red-800"
          >
            Lizenzformular Nachwuchs
          </a>
        </p>
        <p className="mt-4">
          Bitte schick beide ausgefüllte Formulare sowie eine Kopie von Pass/ID
          (beide Seiten!) an deinen Trainer inklusive einem aktuellen Passfoto.
        </p>
      </div>

      <div className="bg-white pt-12 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
        <h2 className="text-lg leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Kontakt
        </h2>
        <p className="mt-4">
          <strong>Vereinsadresse</strong>
          <br />
          SHC Belpa 1107
          <br />
          Postfach 1067
          <br />
          3123 Belp
          <br />
          mail (at) shcbelpa.ch
          <br />
        </p>
        <p className="mt-4">
          <strong>Bankverbindung</strong>
          <br />
          CH26 0630 0016 2012 9680 8 (Valiant Bank AG)
        </p>
      </div>

      <div className="bg-white pt-12 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
        <h2 className="text-lg leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Spielfeld
        </h2>
        <p className="mt-4">
          Der SHC Belpa 1107 trägt seine Spiele in der Freizeit- und Sportanlage
          Giessenbad beim Flughafen in Belp aus.
        </p>
        <p className="mt-4 pb-8">
          <a
            href="https://goo.gl/maps/8xBWZnCeMCo"
            className="text-red-600 hover:text-red-800"
          >
            Google Maps
          </a>
        </p>
      </div>
    </SingleColumnPage>
  );
}
