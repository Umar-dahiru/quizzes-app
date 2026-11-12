const CATEGORY_DATA = [
  {id:"basics",name:"Computer Basics & Fundamentals",icon:"💻",description:"Computer concepts, data and information"},
  {id:"hardware",name:"Computer Hardware & Software",icon:"🖥️",description:"Devices, components and applications"},
  {id:"operating",name:"Operating Systems",icon:"⚙️",description:"Windows, Linux, files and processes"},
  {id:"networking",name:"Computer Networking",icon:"🌐",description:"IP, protocols, network devices and models"},
  {id:"security",name:"Cybersecurity",icon:"🔐",description:"Threats, protection and safe computing"},
  {id:"programming",name:"Programming & Web Development",icon:"👨‍💻",description:"Code, HTML, CSS, JavaScript and APIs"},
  {id:"database",name:"Databases & Data",icon:"🗄️",description:"SQL, data models and data management"},
  {id:"cloud",name:"Cloud Computing & DevOps",icon:"☁️",description:"Cloud services, hosting and deployment"},
  {id:"ai",name:"AI, Data Science & Emerging Tech",icon:"🤖",description:"AI concepts, analytics and modern technology"},
  {id:"productivity",name:"IT Support & Digital Productivity",icon:"🛠️",description:"Troubleshooting, office tools and IT practice"}
];

// Each question: [question, option A, option B, option C, option D, correct option index, difficulty, explanation]
const QUESTION_BANK = {
basics:[
["What does CPU stand for?","Central Processing Unit","Computer Personal Unit","Core Program Utility","Central Peripheral Unit",0,"Beginner","The CPU executes instructions and performs calculations; it is often called the computer's brain."],
["Which number system do computers use internally?","Decimal","Binary","Roman","Octal only",1,"Beginner","Binary uses 0 and 1 to represent data at the hardware level."],
["What is the main purpose of RAM?","Permanent file storage","Temporary working memory","Printing documents","Connecting to the internet",1,"Beginner","RAM temporarily holds data and instructions currently in use."],
["Which unit is commonly used to measure processor clock speed?","Pixel","Hertz (Hz)","Litre","DPI",1,"Beginner","Processor frequency is measured in hertz, commonly gigahertz."],
["What is an input device?","A device that sends data to a computer","A device that displays output","A device that stores backups only","A device that supplies electricity",0,"Beginner","Input devices allow users or other systems to enter data."],
["Which of these is an output device?","Keyboard","Mouse","Monitor","Scanner",2,"Beginner","A monitor presents visual information produced by a computer."],
["What does GUI mean?","General User Internet","Graphical User Interface","Global Utility Input","Graph Unit Integration",1,"Beginner","A GUI lets users interact through visual elements such as windows and icons."],
["Which is the smallest unit of digital data?","Byte","Bit","Kilobyte","Megabyte",1,"Beginner","A bit is a binary digit: either 0 or 1."],
["How many bits are in one byte?","4","8","16","32",1,"Beginner","One byte contains eight bits."],
["Which storage device has no moving mechanical parts?","HDD","SSD","DVD drive","Floppy disk",1,"Beginner","Solid-state drives use flash memory rather than spinning platters."],
["What is data?","Raw facts and figures","Only a finished report","A computer program","An internet connection",0,"Beginner","Data is raw facts that can be processed into meaningful information."],
["What is information?","Unprocessed symbols","Data processed into a meaningful form","A type of processor","A storage cable",1,"Beginner","Information is data organized or processed to provide meaning."],
["Which is an example of application software?","Device firmware","Microsoft Word","BIOS","CPU microcode",1,"Beginner","Word is an application used to create and edit documents."],
["What does ICT stand for?","Information and Communication Technology","Internet Computer Transfer","Integrated Circuit Testing","Information Control Terminal",0,"Beginner","ICT covers technologies used to handle and communicate information."],
["Which component connects major computer components together?","Motherboard","Mouse pad","Toner cartridge","Webcam",0,"Beginner","The motherboard provides the main circuit board and communication pathways."],
["What is a file extension commonly used for?","To identify a file type","To increase RAM","To encrypt every file","To set screen brightness",0,"Beginner","Extensions such as .pdf and .jpg help identify file formats."],
["Which is a valid example of a strong passphrase practice?","Use your name","Reuse one password everywhere","Use a long unique passphrase","Write password on public wall",2,"Intermediate","A long, unique passphrase is harder to guess and limits password reuse risk."],
["What does booting mean?","Starting a computer and loading its operating system","Deleting all files","Installing a printer","Connecting a monitor",0,"Beginner","Booting is the startup process that loads the system software."],
["Which memory is typically non-volatile?","RAM","CPU cache","ROM","Register",2,"Intermediate","ROM retains its contents when power is removed."],
["What is the purpose of a backup?","To make a screen brighter","To provide a recoverable copy of data","To speed up typing","To replace an operating system",1,"Beginner","Backups help restore information after loss, corruption or accidental deletion."]
],
hardware:[
["Which component performs most general-purpose calculations?","CPU","Power supply","Monitor","Keyboard",0,"Beginner","The CPU processes instructions and coordinates system operations."],
["What does GPU stand for?","General Program Utility","Graphics Processing Unit","Graphical Power Unit","Global Processing User",1,"Beginner","A GPU accelerates graphics and many parallel computations."],
["Which component supplies electrical power to desktop parts?","PSU","RAM","NIC"," heatsink",0,"Beginner","The power supply unit converts mains power into suitable DC outputs."],
["What is the function of a heat sink?","Cool a component by dissipating heat","Store user files","Connect to Wi-Fi","Increase screen resolution",0,"Beginner","A heat sink transfers heat away from components such as CPUs."],
["Which connector is commonly used for modern displays?","HDMI","RJ11","SATA power","PS/2 only",0,"Beginner","HDMI carries digital video and audio to a display."],
["What does USB stand for?","Universal Serial Bus","Unified System Board","User Storage Base","Universal Software Bridge",0,"Beginner","USB is a standard interface for connecting peripherals and transferring data."],
["Which device converts printed paper images into digital files?","Scanner","Projector","Speaker","Plotter",0,"Beginner","A scanner captures a physical document as a digital image."],
["What is firmware?","Software embedded in hardware","A spreadsheet","A network cable","A temporary browser tab",0,"Intermediate","Firmware provides low-level control for a hardware device."],
["Which storage medium uses laser technology to read data?","DVD","RAM","SSD","Magnetic tape only",0,"Beginner","Optical discs use a laser to read encoded information."],
["What is the role of a network interface card?","Connect a device to a network","Cool the CPU","Display images","Print documents",0,"Beginner","A NIC provides wired or wireless network connectivity."],
["Which memory is usually faster and smaller than RAM?","CPU cache","Hard disk","USB flash drive","Blu-ray disc",0,"Intermediate","Cache stores frequently needed data close to the processor."],
["What is the purpose of thermal paste?","Improve heat transfer between CPU and cooler","Clean a keyboard","Protect files from malware","Increase Wi-Fi range",0,"Intermediate","Thermal paste fills microscopic gaps between contacting surfaces."],
["Which is an example of an embedded system?","A washing machine controller","A desktop monitor stand","A paper notebook","A passive HDMI cable",0,"Intermediate","Embedded systems are dedicated computers built into larger devices."],
["What does a motherboard chipset help manage?","Communication between CPU and other components","Ink levels in a printer","Website domain names","Battery chemistry",0,"Advanced","The chipset supports data flow and platform features between components."],
["Which port is commonly associated with Ethernet?","RJ45","HDMI","VGA","3.5 mm audio",0,"Beginner","Ethernet cables commonly use an 8P8C connector often called RJ45."],
["What is a peripheral?","An external or auxiliary device connected to a computer","A CPU instruction","A database table","An operating system kernel",0,"Beginner","Peripherals include devices such as keyboards, printers and webcams."],
["Which component retains data without power and is used for long-term storage?","SSD","RAM","CPU register","L1 cache",0,"Beginner","An SSD is non-volatile storage and retains data when powered off."],
["What does a laptop battery primarily provide?","Portable electrical power","Extra internet bandwidth","More disk capacity","A stronger Wi-Fi signal",0,"Beginner","The battery powers a laptop when it is not connected to mains electricity."],
["Which hardware component is designed to produce audio output?","Sound card","NIC","GPU fan","Touchpad",0,"Beginner","Audio hardware processes sound input and output."],
["What is a device driver?","Software that lets the OS communicate with hardware","A physical cable","A backup schedule","A computer virus",0,"Intermediate","Drivers provide the operating system with instructions for controlling hardware."]
],
operating:[
["What is the primary role of an operating system?","Manage hardware and software resources","Create electricity","Design computer chips","Replace all applications",0,"Beginner","An OS manages resources and provides services for applications and users."],
["Which of these is an operating system?","Ubuntu","Google Chrome","Microsoft Word","Adobe Photoshop",0,"Beginner","Ubuntu is a Linux-based operating system distribution."],
["What is a process?","A program currently being executed","A folder icon","A type of monitor","A network address",0,"Intermediate","A process is a running instance of a program."],
["What is multitasking?","Running or managing multiple tasks during the same period","Deleting several files","Using multiple keyboards","Connecting many printers",0,"Beginner","An OS shares processing time and resources among tasks."],
["Which file system is commonly used by modern Windows installations?","NTFS","EXT4","APFS only","FAT12 only",0,"Intermediate","NTFS is a standard Windows file system with permissions and journaling features."],
["What does CLI stand for?","Command-Line Interface","Computer Link Internet","Central Logic Input","Common Language Index",0,"Beginner","A CLI allows users to operate a system by entering text commands."],
["Which command lists files in many Linux shells?","ls","dirsize","showallfiles","listnet",0,"Beginner","The ls command displays directory contents."],
["What is the purpose of a user account?","Identify a user and control access to resources","Increase CPU frequency","Format a monitor","Assign a MAC address",0,"Beginner","Accounts support authentication, permissions and personalization."],
["What is virtual memory?","Disk space used to extend the apparent memory available to processes","A second physical CPU","A cloud email account","A graphics setting",0,"Intermediate","Virtual memory uses storage to support memory management when RAM is limited."],
["What does a kernel do?","Core part of an OS managing system resources","Display web pages","Edit photographs","Create spreadsheets",0,"Advanced","The kernel handles low-level operations such as scheduling and memory management."],
["Which Linux command changes the current directory?","cd","mv","pwd","grep",0,"Beginner","cd means change directory."],
["What is a software update intended to do?","Fix issues, improve features or address vulnerabilities","Always erase personal files","Increase monitor size","Disable security",0,"Beginner","Updates maintain software reliability, compatibility and security."],
["What is a file permission?","A rule defining who can read, write or execute a file","A file's colour","A storage device speed","A network cable standard",0,"Intermediate","Permissions control which users or groups can perform actions on files."],
["What is the purpose of Task Manager in Windows?","View and manage running apps and processes","Create a new email domain","Configure a router only","Edit BIOS firmware",0,"Beginner","Task Manager displays processes, performance and startup applications."],
["What is a shell in an operating system?","A program that provides an interface to system services","A type of RAM","A physical case","A database backup",0,"Advanced","A shell interprets commands and provides access to operating-system functions."],
["Which key combination commonly opens Task Manager directly in Windows?","Ctrl+Shift+Esc","Ctrl+P","Alt+F4","Win+L",0,"Beginner","Ctrl+Shift+Esc opens Task Manager."],
["What is a device manager used for?","View and configure installed hardware and drivers","Manage website content","Create user passwords only","Compress video files",0,"Intermediate","Device Manager helps inspect hardware status and driver configuration."],
["What is a system restore point?","A saved system configuration state for recovery","A copy of every cloud file","A new user profile","A browser bookmark",0,"Intermediate","Restore points can roll back certain system settings and drivers."],
["What does open-source software mean?","Its source code is available under a licence allowing inspection and reuse","It is always free of bugs","It only runs on Linux","It cannot be modified",0,"Intermediate","Open-source licences grant specified rights to inspect, modify and redistribute code."],
["What is a software patch?","A targeted update that fixes or improves software","A physical motherboard repair","A Wi-Fi password","A deleted folder",0,"Beginner","Patches commonly address bugs or security vulnerabilities."]
],
networking:[
["What does LAN stand for?","Local Area Network","Large Access Node","Linked Application Network","Long Area Number",0,"Beginner","A LAN connects devices within a limited area such as an office or home."],
["What is the main purpose of an IP address?","Identify an interface on an IP network","Encrypt a hard drive","Name a computer file","Measure internet speed",0,"Beginner","IP addresses enable devices to send packets to the correct network destination."],
["Which device forwards traffic between different networks?","Router","Keyboard","Repeater only","Monitor",0,"Beginner","Routers make forwarding decisions between IP networks."],
["What does DNS do?","Translate domain names into IP addresses","Encrypt every email","Assign screen resolution","Compress files",0,"Beginner","DNS resolves human-readable names such as example.com to records including IP addresses."],
["Which protocol is commonly used to browse secure websites?","HTTPS","FTP","Telnet","SMTP",0,"Beginner","HTTPS protects HTTP communication using TLS."],
["What is the standard port for HTTP?","80","21","25","443",0,"Intermediate","HTTP commonly uses TCP port 80."],
["What is the standard port for HTTPS?","443","53","110","23",0,"Intermediate","HTTPS commonly uses TCP port 443."],
["What does DHCP provide to network clients?","Automatic IP configuration","Malware scanning","File compression","Domain registration",0,"Intermediate","DHCP can assign IP addresses, gateways and DNS server details."],
["Which protocol is used to send email between mail servers?","SMTP","POP3","IMAP","SNMP",0,"Intermediate","SMTP is used to transfer outgoing email between mail systems."],
["What is a MAC address?","A hardware-level network interface identifier","A website URL","A Wi-Fi password","An IP routing protocol",0,"Intermediate","A MAC address identifies a network interface at the data-link layer."],
["How many bits are in an IPv4 address?","32","64","128","256",0,"Beginner","IPv4 addresses are 32 bits long."],
["How many bits are in an IPv6 address?","128","32","48","64",0,"Beginner","IPv6 uses 128-bit addresses."],
["What is the purpose of a subnet mask?","Separate network and host portions of an IPv4 address","Encrypt network traffic","Measure cable length","Assign MAC addresses",0,"Intermediate","A subnet mask indicates which bits identify the network."],
["Which network topology connects devices to a central switch?","Star","Ring","Bus","Mesh only",0,"Beginner","In a star topology, each device connects to a central device."],
["What does a switch primarily do on a LAN?","Forward frames using MAC addresses","Resolve domain names","Assign public IP addresses","Filter spam email",0,"Intermediate","Ethernet switches learn MAC addresses and forward frames to appropriate ports."],
["Which OSI layer is responsible for routing?","Network layer","Physical layer","Presentation layer","Session layer",0,"Advanced","The OSI Network layer (Layer 3) handles logical addressing and routing."],
["What does bandwidth describe?","The capacity of a connection to transfer data","The physical length of a cable","The number of user accounts","The strength of encryption only",0,"Beginner","Bandwidth is the data-carrying capacity of a connection over time."],
["What is latency?","The delay before data transfer or response","The total storage capacity","The number of routers","The Wi-Fi password length",0,"Beginner","Latency measures delay, often expressed in milliseconds."],
["Which command can test reachability using ICMP echo requests?","ping","mkdir","format","chmod",0,"Beginner","ping sends echo requests and reports replies and timing."],
["What is a VPN commonly used for?","Create an encrypted tunnel over another network","Increase RAM","Replace DNS permanently","Repair damaged hardware",0,"Intermediate","A VPN can protect traffic between a device and a VPN endpoint."]
],
security:[
["What is phishing?","A deceptive attempt to steal information by impersonation","A method of cooling servers","A file compression format","A network topology",0,"Beginner","Phishing messages impersonate trusted sources to trick people into revealing data or taking unsafe actions."],
["What is multi-factor authentication?","Using two or more different authentication factors","Using the same password twice","Changing a username daily","Logging in without credentials",0,"Beginner","MFA combines factors such as something you know, have or are."],
["What is ransomware?","Malware that blocks access to data, often demanding payment","A secure backup tool","A network switch","A programming language",0,"Beginner","Ransomware commonly encrypts or steals data and demands a ransom."],
["Which is the safest response to an unexpected email attachment?","Verify the sender and context before opening","Open it immediately","Forward it to everyone","Disable antivirus first",0,"Beginner","Unexpected attachments can deliver malware; verify legitimacy first."],
["What does encryption do?","Transforms data so it is unreadable without the right key","Deletes duplicate files","Improves Wi-Fi range","Speeds up a processor",0,"Beginner","Encryption protects confidentiality by converting plaintext into ciphertext."],
["What is a firewall?","A system that filters network traffic according to rules","A tool for editing videos","A type of CPU","A cloud storage folder",0,"Beginner","Firewalls enforce traffic policies between networks or hosts."],
["Why are software updates important for security?","They can fix known vulnerabilities","They always remove user accounts","They disable encryption","They make passwords public",0,"Beginner","Attackers often exploit known flaws, so timely patching reduces exposure."],
["What is social engineering?","Manipulating people into revealing information or performing actions","Designing a social media logo","Optimizing a database","Building a network cable",0,"Intermediate","Social engineering exploits human trust, urgency or authority rather than only technical flaws."],
["Which password is strongest?","A long unique passphrase","12345678","password2026","Your first name",0,"Beginner","Length and uniqueness make a passphrase more resistant to guessing and reuse attacks."],
["What is the principle of least privilege?","Give users only the access they need","Give everyone administrator rights","Share one account","Disable all access logs",0,"Intermediate","Least privilege limits the impact of mistakes and compromised accounts."],
["What is malware?","Software designed to cause harm or unauthorized activity","A secure operating system","A network protocol","A hardware warranty",0,"Beginner","Malware includes viruses, worms, trojans, spyware and ransomware."],
["What is a zero-day vulnerability?","A flaw exploited before a fix is available or widely known","A password changed every day","A deleted backup","A harmless software feature",0,"Advanced","Zero-day refers to a vulnerability for which defenders have had little or no time to prepare a patch."],
["What is a DDoS attack?","Overwhelming a service with traffic from many sources","Stealing a laptop physically","Encrypting one local document","Guessing a single password offline",0,"Intermediate","Distributed denial-of-service attacks use multiple systems to disrupt availability."],
["Why should public Wi-Fi be treated cautiously?","Other users or attackers may monitor or manipulate unsafe traffic","It always deletes files","It disables device batteries","It guarantees anonymous browsing",0,"Beginner","Use HTTPS, trusted VPNs where appropriate, and avoid sensitive activity on untrusted networks."],
["What is a security patch?","An update that fixes a security weakness","A new monitor cable","A password hint","A network address",0,"Beginner","Security patches remediate vulnerabilities in software or firmware."],
["What is the purpose of a digital certificate in TLS?","Help authenticate a server's identity and support secure connections","Increase storage space","Assign a private IP address","Scan a keyboard",0,"Advanced","Certificates bind identities to public keys and are validated during TLS handshakes."],
["What is an insider threat?","A risk originating from someone with authorized access","A threat that only comes from outer space","A broken monitor","A public DNS record",0,"Intermediate","Insiders may intentionally or accidentally misuse their access."],
["What should you do if an account may be compromised?","Change credentials from a trusted device and report it","Ignore unusual activity","Share the password with colleagues","Delete all security alerts",0,"Beginner","Secure the account promptly, revoke suspicious sessions and notify the responsible support or security team."],
["What is a backup rule commonly recommended for resilience?","Keep multiple copies on different media, including an off-site copy","Keep one copy on the same laptop only","Never test backups","Store passwords in public documents",0,"Intermediate","The 3-2-1 approach recommends three copies, two media types and one off-site copy."],
["What is vulnerability management?","Identifying, prioritizing and addressing security weaknesses","Designing computer icons","Buying the fastest processor","Managing office stationery",0,"Advanced","A vulnerability management program continuously assesses and remediates weaknesses."]
],
programming:[
["What does HTML stand for?","HyperText Markup Language","High Transfer Machine Logic","Hyperlink Text Management Language","Home Tool Markup List",0,"Beginner","HTML structures content on web pages."],
["What is CSS mainly used for?","Styling and layout of web pages","Storing relational data","Managing server electricity","Encrypting passwords",0,"Beginner","CSS controls presentation such as colours, spacing and responsive layout."],
["Which language is commonly used to add interactivity to web pages?","JavaScript","SQL","Bash only","XML",0,"Beginner","JavaScript runs in browsers and can respond to user actions."],
["What is a variable in programming?","A named place or reference used to hold a value","A computer monitor","A network cable","A fixed image format",0,"Beginner","Variables let programs store and refer to data."],
["What is a loop used for?","Repeat a block of instructions","Encrypt a hard drive","Create a network address","Display a printer queue only",0,"Beginner","Loops repeat code while a condition or iteration rule applies."],
["What is a function?","A reusable block of code that performs a task","A physical computer part","A database server rack","A file extension",0,"Beginner","Functions package logic for reuse and organization."],
["What does API stand for?","Application Programming Interface","Advanced Program Internet","Automated Peripheral Input","Application Process Index",0,"Beginner","An API defines how software components communicate."],
["What is the DOM in web development?","A programming representation of a web document","A database backup","A network protocol","A CSS preprocessor",0,"Intermediate","The Document Object Model lets scripts access and update page structure and content."],
["Which HTTP method is conventionally used to retrieve a resource?","GET","POST","DELETE","PATCH",0,"Beginner","GET requests a representation of a resource."],
["Which HTTP status code means Not Found?","404","200","301","500",0,"Beginner","404 indicates that the requested resource could not be found."],
["What is responsive web design?","Designing layouts that adapt to different screen sizes","Making every page a PDF","Using only desktop computers","Removing all images",0,"Beginner","Responsive design uses flexible layouts and media queries for different viewports."],
["What is a code editor?","Software used to write and edit source code","A device for printing books","A network firewall","A database table",0,"Beginner","Code editors provide text editing and often syntax highlighting and development features."],
["What is debugging?","Finding and fixing errors in a program","Compressing a website","Creating a user password","Installing a graphics card",0,"Beginner","Debugging is the systematic process of diagnosing and correcting defects."],
["What is Git used for?","Version control and tracking changes in files","Creating animations only","Hosting email accounts","Encrypting Wi-Fi",0,"Beginner","Git records project history and supports collaboration through branches and commits."],
["What is a repository in Git?","A project directory tracked by version control","A computer power cable","A type of browser cookie","A network switch",0,"Beginner","A repository contains files and their version history."],
["What does JSON commonly represent?","Structured data using key-value pairs and arrays","A video codec","A physical storage device","A network topology",0,"Intermediate","JSON is a lightweight text format for data interchange."],
["What is the purpose of a CSS media query?","Apply styles based on device or viewport conditions","Send email to users","Connect to a database","Compile JavaScript",0,"Intermediate","Media queries support responsive styling for screen sizes and other media features."],
["What is a syntax error?","Code that violates the language's grammar rules","A slow internet connection","A failed hard drive","An incorrect monitor cable",0,"Beginner","A parser or interpreter detects code that does not follow valid syntax."],
["What is the backend of a web application responsible for?","Server-side logic, data access and application services","Only page colours","Physical keyboard input","Monitor brightness",0,"Intermediate","The backend handles operations such as authentication, business logic and database access."],
["What is a package manager used for?","Install and manage project dependencies","Manage monitor cables","Assign IP addresses","Create backups automatically",0,"Intermediate","Package managers such as npm install and manage reusable software libraries."]
],
database:[
["What does SQL stand for?","Structured Query Language","Simple Question Logic","System Queue Link","Standard Quick List",0,"Beginner","SQL is used to define, query and manipulate relational databases."],
["What is a database table made up of?","Rows and columns","Slides and frames","Folders and shortcuts","Pixels and layers",0,"Beginner","Tables organize records into rows and attributes into columns."],
["What is a primary key?","A column or set of columns that uniquely identifies a row","A password for the database server","A backup file","A chart title",0,"Beginner","Primary keys enforce unique row identification."],
["Which SQL command retrieves records?","SELECT","INSERT","DROP","ALTER",0,"Beginner","SELECT queries data from one or more tables."],
["Which SQL command adds a new row?","INSERT","SELECT","UPDATE","GRANT",0,"Beginner","INSERT adds new records to a table."],
["What does WHERE do in an SQL query?","Filters rows based on a condition","Sorts a database backup","Creates a new table","Encrypts a column",0,"Beginner","WHERE restricts which rows match a query."],
["What is a foreign key?","A field referencing a key in another or the same table","A key stored outside the office","A database password","A duplicate database",0,"Intermediate","Foreign keys enforce relationships and referential integrity."],
["What is database normalization intended to reduce?","Unnecessary duplication and update anomalies","Network latency","Screen brightness","Password length",0,"Intermediate","Normalization organizes data to reduce redundancy and anomalies."],
["Which SQL clause sorts query results?","ORDER BY","GROUP BY","WHERE","VALUES",0,"Beginner","ORDER BY sorts rows by one or more expressions."],
["What does COUNT(*) return?","The number of rows in the selected result","The sum of all numeric values","The largest text field","The database size in bytes",0,"Beginner","COUNT(*) counts rows, including rows with null values."],
["What is a database index used for?","Speed up data retrieval for suitable queries","Encrypt every record","Replace all primary keys","Increase monitor resolution",0,"Intermediate","Indexes can improve lookup and sorting performance, with storage and write costs."],
["What is a transaction in a relational database?","A logical unit of work that should satisfy ACID properties","A user interface theme","A file compression method","A network cable",0,"Intermediate","Transactions group operations into a unit with defined consistency guarantees."],
["What does ACID stand for?","Atomicity, Consistency, Isolation, Durability","Accuracy, Control, Internet, Data","Access, Cache, Index, Domain","Atomicity, Coding, Input, Design",0,"Advanced","ACID describes key reliability properties of database transactions."],
["Which SQL command changes existing records?","UPDATE","CREATE","SELECT","TRUNCATE",0,"Beginner","UPDATE modifies values in rows that match its conditions."],
["What does JOIN do in SQL?","Combines related rows from tables","Deletes duplicate databases","Creates a password","Compresses query results",0,"Intermediate","JOIN relates rows using a specified condition."],
["What is a NULL value commonly used to represent?","Missing or unknown data","The number zero in every context","An empty database","A true value",0,"Intermediate","NULL represents the absence of a known value and is not the same as zero or an empty string."],
["What is a database schema?","The defined structure of database objects","A list of user passwords","A backup schedule only","A query result",0,"Intermediate","A schema describes objects such as tables, columns, constraints and relationships."],
["Which command creates a new SQL table?","CREATE TABLE","MAKE DATABASE ROW","INSERT TABLE","SELECT TABLE",0,"Beginner","CREATE TABLE defines a new table and its columns and constraints."],
["What is a database backup?","A copy used to restore data after loss or failure","A query that sorts rows","A database index","A user permission",0,"Beginner","Backups provide a recovery source when the live database is damaged or lost."],
["What is an ORM?","A tool that maps application objects to database structures","A network encryption standard","A computer processor","An image file format",0,"Advanced","Object-relational mapping tools let applications work with relational data through objects."]
],
cloud:[
["What is cloud computing?","On-demand access to computing resources over a network","A type of weather satellite","A local-only spreadsheet","A computer cooling method",0,"Beginner","Cloud computing provides resources such as servers, storage and databases as services."],
["What does SaaS stand for?","Software as a Service","Storage as a System","Server and Security","Software and System",0,"Beginner","SaaS delivers application software over a network, often by subscription."],
["Which is an example of an IaaS resource?","Virtual machine","Word document template","Email signature","Keyboard driver",0,"Intermediate","IaaS provides infrastructure resources such as virtual machines and networking."],
["What does PaaS provide?","A managed platform for building and running applications","Only physical keyboards","A local printer driver","A password vault only",0,"Intermediate","PaaS abstracts much of the underlying infrastructure for application development."],
["What is scalability?","The ability to handle changing workload or demand","The size of a monitor","A type of source code","A database password",0,"Beginner","Scalable systems can increase or decrease capacity as needs change."],
["What is a virtual machine?","A software-based computer running on virtualized resources","A physical mouse","A network cable tester","A spreadsheet macro",0,"Beginner","A VM emulates a computer system and runs its own operating system."],
["What is a container?","A packaged application environment sharing the host OS kernel","A physical server rack","A cloud billing invoice","A database password",0,"Intermediate","Containers package applications and dependencies while sharing the host kernel."],
["What is Docker commonly used for?","Building and running containers","Editing photos","Managing email spam only","Creating IP addresses",0,"Beginner","Docker provides tools for packaging and running containerized applications."],
["What is CI/CD intended to improve?","Automated integration, testing and delivery or deployment","Manual password sharing","Monitor calibration","Hard drive partitioning",0,"Intermediate","CI/CD automates parts of software integration and release workflows."],
["What is a deployment?","Releasing an application to an environment where it can run","Deleting source code","Changing a keyboard layout","Creating a spreadsheet formula",0,"Beginner","Deployment makes a software version available in a target environment."],
["What is a load balancer used for?","Distribute requests across multiple servers","Encrypt a single file","Create HTML headings","Store browser bookmarks",0,"Intermediate","Load balancers distribute incoming traffic to improve availability and capacity."],
["What is serverless computing?","A model where the provider manages server infrastructure for code execution","Computing without any servers existing","A laptop with no battery","A local database with no tables",0,"Intermediate","Developers deploy functions or services without managing the underlying server fleet."],
["What is an environment variable commonly used for?","Provide configuration values to an application","Store source code comments","Increase CPU speed","Design page layouts",0,"Intermediate","Environment variables configure applications and can hold deployment-specific settings."],
["Why should secrets not be committed to a public repository?","Others could use exposed credentials to access systems","It makes code too colourful","Git cannot store text","It prevents CSS from loading",0,"Beginner","API keys and passwords in public history can be copied and abused."],
["What is horizontal scaling?","Adding more instances to share workload","Increasing RAM in one server only","Reducing database rows","Changing a domain name",0,"Advanced","Horizontal scaling adds machines or instances rather than only enlarging one."],
["What is a CDN?","A distributed network that delivers content closer to users","A database query language","A password hashing method","A type of operating system",0,"Intermediate","A content delivery network caches and serves content from geographically distributed locations."],
["What is monitoring in operations?","Collecting metrics, logs or traces to understand system health","Changing a website logo","Writing source code only","Creating user accounts",0,"Beginner","Monitoring helps teams detect issues and understand performance and availability."],
["What is a rollback?","Returning a deployment to a previous known version","Increasing the version number","Deleting all backups","Moving a server physically",0,"Intermediate","A rollback restores an earlier release when a new deployment causes problems."],
["What is infrastructure as code?","Managing infrastructure through machine-readable configuration","Drawing server diagrams by hand only","Writing a user manual","Storing passwords in a spreadsheet",0,"Advanced","IaC defines and provisions infrastructure using versionable configuration or code."],
["What is a region in cloud services?","A geographic area containing cloud infrastructure locations","A programming language","A user permission","A database column",0,"Beginner","Cloud regions group infrastructure in a particular geographic area."]
],
ai:[
["What does AI stand for?","Artificial Intelligence","Automated Internet","Advanced Interface","Applied Integration",0,"Beginner","AI refers to systems designed to perform tasks associated with human intelligence."],
["What is machine learning?","A field where systems learn patterns from data","A method of repairing keyboards","A network cable standard","A type of database backup",0,"Beginner","Machine learning algorithms learn patterns from examples rather than relying only on fixed rules."],
["What is a training dataset?","Data used to fit a machine-learning model","A computer's power cable","A finished user manual","A network firewall rule",0,"Beginner","Training data is used by an algorithm to learn model parameters."],
["What is overfitting?","A model learns training data too closely and generalizes poorly","A computer has too much RAM","A database contains too many tables","A website uses too many colours",0,"Intermediate","Overfit models perform well on training examples but poorly on unseen data."],
["What is a prompt in generative AI?","An instruction or input given to a model","A computer power setting","A database index","A network packet",0,"Beginner","A prompt guides the model's response or generated output."],
["What is a hallucination in generative AI?","A plausible-sounding output that is incorrect or unsupported","A broken monitor","A network outage","A database transaction",0,"Beginner","AI-generated content can sound confident while containing fabricated facts."],
["What is natural language processing?","Technology for working with human language","A type of computer memory","A wireless protocol","A graphics card standard",0,"Intermediate","NLP includes tasks such as translation, summarization and language understanding."],
["What is a neural network inspired by?","Simplified models of interconnected neurons","A computer motherboard layout","A telephone directory","A file system",0,"Beginner","Artificial neural networks use connected computational units called neurons."],
["What is data visualization?","Presenting data graphically to reveal patterns","Encrypting a hard drive","Installing a printer","Writing source code comments",0,"Beginner","Charts and graphs can make trends and relationships easier to understand."],
["Which chart is often suitable for comparing values across categories?","Bar chart","Scatter plot only","Network diagram","Flowchart",0,"Beginner","Bar charts compare quantities across discrete categories."],
["What is big data commonly associated with?","Large, fast or varied datasets that need specialized processing","A single text file","A small calculator","A printer queue",0,"Intermediate","Big data is often described through volume, velocity and variety."],
["What is a chatbot?","Software that interacts with users through conversation","A type of hard drive","A network switch","A database backup",0,"Beginner","Chatbots provide conversational interfaces, often using rules or AI models."],
["What is generative AI designed to do?","Create new content such as text, images or audio","Only sort spreadsheets","Replace computer networks","Repair physical devices",0,"Beginner","Generative models produce new outputs based on patterns learned from data."],
["What is a model in machine learning?","A learned mathematical or computational representation","A computer case design","A Wi-Fi router","A file extension",0,"Intermediate","A model captures patterns learned during training and is used to make predictions or generate outputs."],
["What is a classification task?","Assign an input to one of a set of categories","Predict only a continuous number","Compress a folder","Route a network packet",0,"Intermediate","Classification predicts a discrete label such as spam or not spam."],
["What is regression in machine learning?","Predicting a numerical value","Assigning a category only","Encrypting data","Sorting files alphabetically",0,"Intermediate","Regression models estimate continuous numeric outcomes."],
["Why is data quality important in AI?","Poor data can produce unreliable or biased results","It always increases internet speed","It removes the need for testing","It guarantees perfect predictions",0,"Intermediate","Models depend on representative, accurate and appropriately prepared data."],
["What is an algorithm?","A defined sequence of steps for solving a problem","A physical storage device","A type of monitor","A network subscription",0,"Beginner","Algorithms specify procedures for transforming inputs into outputs."],
["What is the Internet of Things (IoT)?","Connected physical devices that collect or exchange data","A type of word processor","A computer language","A database table",0,"Beginner","IoT connects sensors and devices to networks and applications."],
["What is edge computing?","Processing data near where it is generated","Moving every task to a distant data centre","A type of spreadsheet","A computer screen border",0,"Advanced","Edge computing reduces the need to send all data to centralized cloud systems."]
],
productivity:[
["What is the first step in basic troubleshooting?","Identify and understand the problem","Replace every component","Delete all user files","Disable all security tools",0,"Beginner","A clear problem description helps guide safe and efficient diagnosis."],
["What does a UPS provide?","Temporary backup power and power conditioning","Faster internet","Extra RAM","A cloud account",0,"Beginner","An uninterruptible power supply can keep equipment running briefly during power loss."],
["Which shortcut commonly copies selected text in Windows?","Ctrl+C","Ctrl+V","Ctrl+X","Ctrl+Z",0,"Beginner","Ctrl+C copies selected content to the clipboard."],
["Which shortcut commonly pastes copied content?","Ctrl+V","Ctrl+C","Ctrl+A","Ctrl+P",0,"Beginner","Ctrl+V pastes content from the clipboard."],
["What is the purpose of a spreadsheet?","Organize data and perform calculations","Edit operating system kernels","Route internet traffic","Manage CPU temperature",0,"Beginner","Spreadsheets arrange data in cells and support formulas, analysis and charts."],
["What is a spreadsheet cell reference such as A1?","A column and row location","A password","A file extension","A network address",0,"Beginner","A1 refers to column A and row 1."],
["What does a word processor help users create?","Text documents","Network routes","Database servers","Computer chips",0,"Beginner","Word processors create and format documents such as letters and reports."],
["Why is it useful to restart a computer during troubleshooting?","It can clear temporary faults and restart services","It always repairs damaged hardware","It removes all malware","It increases permanent storage",0,"Beginner","A restart can resolve some temporary software or resource issues, though not every fault."],
["What should you check if a desktop computer has no power?","Power cable, outlet and power supply switch","Browser history","Printer paper size","Website spelling",0,"Beginner","Check the external power path safely before assuming an internal hardware failure."],
["What is a help desk ticket?","A recorded request or incident for support","A software licence key","A computer component","A Wi-Fi frequency",0,"Beginner","Tickets track reported issues, ownership, progress and resolution."],
["What is an SLA?","Service Level Agreement","Software Link Address","System Login Application","Secure Local Access",0,"Intermediate","An SLA defines agreed service expectations such as response or resolution targets."],
["What is preventive maintenance?","Planned actions to reduce the chance of equipment failure","Repair only after total failure","Deleting all user data","Disabling system updates",0,"Beginner","Cleaning, updates and checks can reduce avoidable failures."],
["Why should important documents be versioned?","To track changes and recover earlier content","To make files impossible to open","To remove metadata","To prevent all cyberattacks",0,"Intermediate","Version history helps identify edits and restore earlier versions."],
["What is data privacy?","Appropriate handling and protection of personal information","Making every file public","Increasing screen brightness","Compressing images",0,"Beginner","Privacy concerns how personal data is collected, used, shared and protected."],
["What is ergonomics in computing?","Designing workspaces and equipment to support comfort and safety","Increasing CPU clock speed","A network routing method","A database language",0,"Beginner","Good ergonomics can reduce strain through suitable posture, positioning and breaks."],
["What is the purpose of a PDF?","Preserve document layout across different devices","Run computer hardware","Replace a database","Provide Wi-Fi connectivity",0,"Beginner","PDF is designed to present documents consistently across platforms."],
["What is cloud file synchronization?","Keeping files consistent across connected devices or services","Printing files automatically","Encrypting every hard drive","Deleting local copies every time",0,"Intermediate","Synchronization propagates changes between configured locations."],
["What should you do before formatting a storage drive?","Verify backups and confirm the correct drive","Unplug random devices","Delete the backup first","Assume formatting is reversible",0,"Beginner","Formatting can destroy access to existing data; verify the target and backups first."],
["What is remote desktop software used for?","Access or control another computer over a network","Increase physical screen size","Create a new CPU","Print without a printer",0,"Intermediate","Remote desktop tools allow authorized users to interact with another machine remotely."],
["What is an IT asset inventory?","A record of devices, software and related ownership or details","A list of website visitors","A programming loop","A database query result",0,"Intermediate","Asset inventories support maintenance, security, licensing and lifecycle management."]
]
};

const $ = (selector) => document.querySelector(selector);
const setup = $("#setup"), quiz = $("#quiz"), results = $("#results");
let selectedQuestions = [], currentIndex = 0, answers = [], sessionCategories = [];

function allQuestions(){
  return Object.entries(QUESTION_BANK).flatMap(([category,items])=>items.map((item,index)=>({
    id:category+"-"+index,categoryId:category,categoryName:CATEGORY_DATA.find(c=>c.id===category).name,
    question:item[0],options:item.slice(1,5),correct:item[5],difficulty:item[6],explanation:item[7]
  })));
}

// Shuffle answer choices while keeping the correct answer attached to its text.
function shuffleQuestionOptions(question){
  const choices=question.options.map((text,index)=>({text,isCorrect:index===question.correct}));
  for(let i=choices.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [choices[i],choices[j]]=[choices[j],choices[i]];
  }
  return {
    ...question,
    options:choices.map(choice=>choice.text),
    correct:choices.findIndex(choice=>choice.isCorrect)
  };
}
const BANK = allQuestions();

function renderCategories(){
  $("#category-grid").innerHTML=CATEGORY_DATA.map(cat=>{
    const count=QUESTION_BANK[cat.id].length;
    return `<label class="category-option selected"><input type="checkbox" value="${cat.id}" checked><span class="category-icon">${cat.icon}</span><span class="category-info"><strong>${cat.name}</strong><span>${cat.description}</span></span><span class="category-count">${count} Q</span></label>`;
  }).join("");
  $("#category-grid").addEventListener("change",updateAvailableCount);
  updateAvailableCount();
}
function chosenCategories(){return [...$("#category-grid").querySelectorAll("input:checked")].map(input=>input.value);}
function updateAvailableCount(){
  const ids=chosenCategories(),difficulty=$("#difficulty").value;
  const available=BANK.filter(q=>ids.includes(q.categoryId)&&(difficulty==="all"||q.difficulty===difficulty)).length;
  $("#available-count").textContent=`${available} question${available===1?"":"s"} available`;
  const countInput=$("#question-count");countInput.max=available||200;
  if(Number(countInput.value)>available&&available) countInput.value=available;
  $("#category-grid").querySelectorAll(".category-option").forEach(label=>label.classList.toggle("selected",label.querySelector("input").checked));
}
$("#select-all").addEventListener("click",()=>{$("#category-grid").querySelectorAll("input").forEach(i=>i.checked=true);updateAvailableCount();});
$("#clear-all").addEventListener("click",()=>{$("#category-grid").querySelectorAll("input").forEach(i=>i.checked=false);updateAvailableCount();});
$("#difficulty").addEventListener("change",updateAvailableCount);
$("#question-count").addEventListener("input",()=>{$("#setup-error").textContent="";});

function startQuiz(){
  const categories=chosenCategories(),difficulty=$("#difficulty").value,requested=Number($("#question-count").value);
  const pool=BANK.filter(q=>categories.includes(q.categoryId)&&(difficulty==="all"||q.difficulty===difficulty));
  if(!categories.length){$("#setup-error").textContent="Select at least one category to start.";return;}
  if(!Number.isInteger(requested)||requested<1){$("#setup-error").textContent="Enter a valid question count of at least 1.";return;}
  if(requested>pool.length){$("#setup-error").textContent=`Only ${pool.length} questions match your current category and difficulty selection. Reduce the question count or select more categories.`;return;}
  $("#setup-error").textContent="";
  selectedQuestions=[...pool].sort(()=>Math.random()-.5).slice(0,requested).map(shuffleQuestionOptions);
  currentIndex=0;answers=Array(requested).fill(null);sessionCategories=categories;
  setup.classList.add("hidden");results.classList.add("hidden");quiz.classList.remove("hidden");
  $("#quiz-category").textContent=categories.length===CATEGORY_DATA.length?"All IT categories":categories.map(id=>CATEGORY_DATA.find(c=>c.id===id).name).join(" · ");
  renderQuestion();window.scrollTo({top:0,behavior:"smooth"});
}
function renderQuestion(){
  const q=selectedQuestions[currentIndex],answered=answers[currentIndex]!==null;
  $("#question-position").textContent=`Question ${currentIndex+1} of ${selectedQuestions.length}`;
  const percent=Math.round(currentIndex/selectedQuestions.length*100);
  $("#progress-percent").textContent=percent+"% complete";$("#progress-fill").style.width=percent+"%";
  $("#question-category").textContent=q.categoryName;$("#question-difficulty").textContent=q.difficulty;
  $("#question-text").textContent=q.question;
  $("#answers").innerHTML=q.options.map((option,index)=>`<button class="answer-option" data-index="${index}" ${answered?"disabled":""}><span class="answer-letter">${String.fromCharCode(65+index)}</span><span>${option}</span></button>`).join("");
  $("#answers").querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>chooseAnswer(Number(button.dataset.index))));
  $("#answered-count").textContent=answers.filter(a=>a!==null).length+" answered";
  $("#next-question").disabled=!answered;
  $("#next-question").innerHTML=currentIndex===selectedQuestions.length-1?'See results <span>✓</span>':'Next question <span>→</span>';
  $("#explanation").classList.toggle("hidden",!answered);
  if(answered)showAnswerState(answers[currentIndex]);
}
function chooseAnswer(index){
  if(answers[currentIndex]!==null)return;
  answers[currentIndex]=index;showAnswerState(index);
  $("#answered-count").textContent=answers.filter(a=>a!==null).length+" answered";
  $("#next-question").disabled=false;
}
function showAnswerState(index){
  const q=selectedQuestions[currentIndex],buttons=$("#answers").querySelectorAll("button");
  buttons.forEach((button,i)=>{button.disabled=true;if(i===q.correct)button.classList.add("correct");if(i===index&&index!==q.correct)button.classList.add("incorrect");});
  const correct=index===q.correct;
  $("#explanation").classList.remove("hidden");
  $("#explanation").innerHTML=`<strong>${correct?"Correct!":"Not quite."}</strong> ${q.explanation}${correct?"":`<br><br><strong>Correct answer:</strong> ${q.options[q.correct]}`}`;
}
function nextQuestion(){
  if(answers[currentIndex]===null)return;
  if(currentIndex<selectedQuestions.length-1){currentIndex++;renderQuestion();return;}
  showResults();
}
function showResults(){
  quiz.classList.add("hidden");results.classList.remove("hidden");
  const correct=answers.reduce((sum,value,index)=>sum+(value===selectedQuestions[index].correct?1:0),0);
  const total=selectedQuestions.length,wrong=total-correct,score=Math.round(correct/total*100);
  $("#score-value").textContent=score+"%";$("#score-fill").style.width=score+"%";
  $("#correct-value").textContent=correct;$("#incorrect-value").textContent=wrong;$("#total-value").textContent=total;
  $("#result-title").textContent=score>=80?"Excellent work!":score>=60?"Good effort!":score>=40?"Keep practising!":"Every expert starts somewhere.";
  $("#result-subtitle").textContent=`You answered ${correct} out of ${total} questions correctly.`;
  $("#result-icon").textContent=score>=60?"✓":"↗";
  $("#review-summary").textContent=`${correct} correct · ${wrong} incorrect`;
  $("#review-list").innerHTML=selectedQuestions.map((q,index)=>{
    const right=answers[index]===q.correct;
    return `<article class="review-item ${right?"":"wrong"}"><span class="review-status">${right?"✓ Correct":"✕ Incorrect"} · ${q.categoryName}</span><p><strong>${index+1}. ${q.question}</strong></p><p>Your answer: ${q.options[answers[index]]}</p>${right?"":`<p>Correct answer: ${q.options[q.correct]}</p>`}<p>${q.explanation}</p></article>`;
  }).join("");
  window.scrollTo({top:0,behavior:"smooth"});
}
$("#start-quiz").addEventListener("click",startQuiz);
$("#next-question").addEventListener("click",nextQuestion);
$("#exit-quiz").addEventListener("click",()=>{if(confirm("Exit this quiz? Your current progress will be lost.")){quiz.classList.add("hidden");setup.classList.remove("hidden");}});
$("#retry-quiz").addEventListener("click",()=>{selectedQuestions=[...BANK.filter(q=>sessionCategories.includes(q.categoryId)&&($("#difficulty").value==="all"||q.difficulty===$("#difficulty").value))].sort(()=>Math.random()-.5).slice(0,answers.length).map(shuffleQuestionOptions);currentIndex=0;answers=Array(selectedQuestions.length).fill(null);results.classList.add("hidden");quiz.classList.remove("hidden");renderQuestion();window.scrollTo({top:0,behavior:"smooth"});});
$("#new-quiz").addEventListener("click",()=>{results.classList.add("hidden");setup.classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});});
renderCategories();
